import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';

const faqs = [
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'You can choose to be home or provide entry instructions. Many customers prefer to be away so our team can work efficiently without disrupting your day.',
  },
  {
    q: 'What if I need to reschedule?',
    a: 'You can reschedule through your confirmation email or by calling us. We ask for at least 24 hours notice when possible so we can adjust the schedule for your cleaner.',
  },
  {
    q: 'Are your cleaners background-checked?',
    a: 'Yes. Every cleaner is vetted, background-checked, and trained on our standards before they visit your home or office.',
  },
  {
    q: 'Do you bring supplies and equipment?',
    a: 'We bring professional-grade supplies and equipment. If you prefer specific products (for allergies or preferences), let us know when you book.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater metro area shown at booking. Enter your address during checkout to confirm availability for your location.',
  },
];

function Faq() {
  return (
    <Section id="faq" className="scroll-mt-24 bg-[var(--cleanx-bg)] py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Heading
            as="h2"
            weight="700"
            className="text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--cleanx-navy)', letterSpacing: '-1px', lineHeight: '1.25em' }}
          >
            Frequently asked questions
          </Heading>
          <Text className="text-lg opacity-70">
            Quick answers about booking, scheduling, and what to expect from CleanX.
          </Text>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white px-5 py-1 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none py-4 font-medium text-left flex items-center justify-between gap-4 text-[var(--cleanx-navy)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-[var(--cleanx-primary)] shrink-0 text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden>
                  +
                </span>
              </summary>
              <div className="pb-4 pt-0 border-t border-gray-100">
                <Text className="text-sm md:text-base opacity-80 pt-4">{item.a}</Text>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Faq;
