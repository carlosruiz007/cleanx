import nodemailer from 'nodemailer';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return json(res, 405, { ok: false, error: 'Method Not Allowed' });
    }

    const {
      fullName = '',
      email = '',
      phone = '',
      frequency = '',
      service = '',
      date = '',
    } = typeof req.body === 'object' && req.body ? req.body : {};

    const safe = (v) => String(v ?? '').trim().slice(0, 5000);
    const payload = {
      fullName: safe(fullName),
      email: safe(email),
      phone: safe(phone),
      frequency: safe(frequency),
      service: safe(service),
      date: safe(date),
    };

    // Minimal validation: require at least a way to contact.
    if (!payload.email && !payload.phone) {
      return json(res, 400, { ok: false, error: 'Please provide an email or phone number.' });
    }

    const transport = nodemailer.createTransport({
      host: requireEnv('SMTP_HOST'),
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || '').toLowerCase() === 'true',
      auth: {
        user: requireEnv('SMTP_USER'),
        pass: requireEnv('SMTP_PASS'),
      },
    });

    const to = requireEnv('BOOKING_TO_EMAIL');
    const from = requireEnv('BOOKING_FROM_EMAIL');

    const subject = `New CleanX booking request${payload.fullName ? ` — ${payload.fullName}` : ''}`;
    const text = [
      'New booking request:',
      '',
      `Name: ${payload.fullName || '-'}`,
      `Email: ${payload.email || '-'}`,
      `Phone: ${payload.phone || '-'}`,
      `Frequency: ${payload.frequency || '-'}`,
      `Service: ${payload.service || '-'}`,
      `Preferred date: ${payload.date || '-'}`,
      '',
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n');

    await transport.sendMail({
      to,
      from,
      subject,
      text,
      replyTo: payload.email || undefined,
    });

    return json(res, 200, { ok: true });
  } catch (err) {
    // Avoid leaking secrets; return a generic message.
    return json(res, 500, { ok: false, error: 'Failed to send booking email.' });
  }
}

