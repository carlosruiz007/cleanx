import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';
import Button from '../design/primitives/Button';

function TestimonialSteps() {
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
        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Image with badge */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image - organic blob shape */}
              <div 
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                }}
              >
                <img 
                  src="/images/testimonial-cleaning.jpg" 
                  alt="House Cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge - organic blob shape */}
              <div 
                className="absolute top-12 right-8 px-8 py-6 font-bold text-white text-center shadow-xl"
                style={{ 
                  backgroundColor: '#FF8C42',
                  borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                  transform: 'rotate(-5deg)'
                }}
              >
                <div className="text-xl leading-tight font-heading" style={{ letterSpacing: '-0.5px' }}>
                  House<br/>Cleaning
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial */}
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="var(--cleanx-accent)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <Heading 
              as="h3" 
              weight="600" 
              className="text-2xl md:text-3xl mb-6"
              style={{ letterSpacing: '-0.5px', lineHeight: '1.3em' }}
            >
              "The cleaner does a wonderful job every time. Love coming home after she's been in!"
            </Heading>

            {/* Author */}
            <div>
              <Text className="font-semibold text-lg mb-1">Samantha Perkins</Text>
              <Text className="text-sm opacity-60">Busy Mother of Two</Text>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div>
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
        </div>
      </Container>
    </Section>
  );
}

export default TestimonialSteps;
