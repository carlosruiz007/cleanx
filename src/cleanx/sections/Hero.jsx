import React, { useState } from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';
import Card from '../design/primitives/Card';
import Button from '../design/primitives/Button';

function Hero() {
  const features = [
    'Instant Quotes',
    'No Rescheduling Fees',
    'No Contracts'
  ];
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  return (
    <Section
      id="home"
      className="scroll-mt-24 bg-[var(--cleanx-bg)] pt-16 md:pt-20 pb-0 relative overflow-hidden min-h-[min(100dvh,900px)] md:min-h-[900px]"
    >
      {/* Background hero image - positioned to start below text, behind form */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-[360px] md:h-[410px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-cleaning.jpg)'
        }}
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div className="pb-8">
            <Heading as="h1" weight="700" className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Premium House and Office Cleaning Services.
            </Heading>
            
            {/* Feature list with checkmarks */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="var(--cleanx-accent)" />
                    <path d="M6 10l3 3 5-6" stroke="var(--cleanx-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text className="text-base font-medium">{feature}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Card - floats above image */}
          <div className="relative z-20">
            <Card className="p-8 rounded-3xl max-w-md mx-auto lg:mx-0 shadow-lg">
              <Heading as="h3" weight="600" className="text-xl mb-6">
                Book A Free Appointment
              </Heading>
              <form
                name="booking"
                action="/"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus({ state: 'loading', message: '' });

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  if (!formData.get('email') && !formData.get('phone')) {
                    setStatus({
                      state: 'error',
                      message: 'Please provide an email or phone number.',
                    });
                    return;
                  }

                  try {
                    const resp = await fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: new URLSearchParams(formData).toString(),
                    });

                    if (!resp.ok) {
                      setStatus({
                        state: 'error',
                        message: 'Something went wrong. Please try again.',
                      });
                      return;
                    }

                    setStatus({
                      state: 'success',
                      message: 'Thanks — we received your request and will reach out shortly.',
                    });
                    form.reset();
                  } catch {
                    setStatus({
                      state: 'error',
                      message: 'Network error. Please try again in a moment.',
                    });
                  }
                }}
              >
                <input type="hidden" name="form-name" value="booking" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div>
                  <label htmlFor="booking-full-name" className="mb-1 block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    id="booking-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="booking-email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="mb-1 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="(415) 555-0132"
                  />
                </div>
                <div>
                  <label htmlFor="booking-frequency" className="mb-1 block text-sm font-medium text-gray-700">
                    Frequency
                  </label>
                  <select
                    id="booking-frequency"
                    name="frequency"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-service" className="mb-1 block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>
                      Select services
                    </option>
                    <option>House Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In/Out</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-date" className="mb-1 block text-sm font-medium text-gray-700">
                    Preferred date
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full rounded-xl mt-4 disabled:opacity-60"
                  disabled={status.state === 'loading'}
                >
                  Book Free Appointment
                </Button>
                {status.state !== 'idle' && (
                  <Text
                    className="text-sm text-center mt-3"
                    style={{
                      color:
                        status.state === 'success'
                          ? 'rgb(22 163 74)'
                          : status.state === 'error'
                            ? 'rgb(220 38 38)'
                            : 'var(--cleanx-text)',
                    }}
                  >
                    {status.state === 'loading' ? 'Sending…' : status.message}
                  </Text>
                )}
                <Text className="text-xs text-center opacity-60 mt-2">
                  34 cleans booked in the last 24 hours
                </Text>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
