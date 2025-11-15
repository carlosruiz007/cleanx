import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';
import Button from '../design/primitives/Button';

function Steps() {
  const steps = [
    {
      id: 1,
      title: 'Book your service in 3 easy steps',
      description: 'Tell us what you want to be cleaned, and we\'ll offer you the best prices available.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M24 12v12l8 4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="16" />
          <path d="M18 8l-2 4m14-4l2 4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Schedule Your Cleaning Time',
      description: 'Our online booking system allows you to select a time that is most convenient for you.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="10" width="32" height="32" rx="2" />
          <line x1="8" y1="18" x2="40" y2="18" />
          <line x1="16" y1="6" x2="16" y2="14" strokeLinecap="round" />
          <line x1="32" y1="6" x2="32" y2="14" strokeLinecap="round" />
          <circle cx="24" cy="28" r="4" />
          <path d="M24 28v-4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Enjoy A Clean, Tidy Home',
      description: 'Sit back and relax while we guarantee a spotless home, from top to bottom',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M24 8l-16 12h4v16h24V20h4L24 8z" strokeLinejoin="round" />
          <path d="M20 32v-8h8v8" />
          <path d="M18 16l6-4 6 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <Section className="bg-white py-20">
      <Container>
        {/* Heading */}
        <Heading 
          as="h2" 
          weight="700" 
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ letterSpacing: '-1px', lineHeight: '1.25em' }}
        >
          Book your service in 3 easy steps
        </Heading>

        {/* Steps with connectors */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Dashed connectors - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line 
                x1="20%" 
                y1="0" 
                x2="45%" 
                y2="0" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="opacity-30"
              />
              <line 
                x1="55%" 
                y1="0" 
                x2="80%" 
                y2="0" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="opacity-30"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                {/* Icon circle */}
                <div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cleanx-accent)' }}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <div style={{ color: 'var(--cleanx-primary)' }}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Heading as="h3" weight="600" className="text-xl mb-3">
                  {step.title}
                </Heading>
                <Text className="text-sm opacity-70 max-w-xs mx-auto">
                  {step.description}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="md" className="rounded-xl px-8">
            Book A Free Appointment
          </Button>
          <Text className="text-sm opacity-60 mt-4">
            34 cleans booked in the last 24 hours
          </Text>
        </div>
      </Container>
    </Section>
  );
}

export default Steps;
