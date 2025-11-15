import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';
import Button from '../design/primitives/Button';

function Standards() {
  const features = [
    'Get the same trusted cleaner, every time',
    'Background checked',
    'Bonded & Insured',
    'Eco-friendly green cleaning',
    'Our own supplies & equipment',
    'Hundreds of 5-star reviews'
  ];

  return (
    <Section className="py-20" style={{ backgroundColor: 'var(--cleanx-accent)' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <Heading 
              as="h2" 
              weight="700" 
              className="text-4xl md:text-5xl mb-8"
              style={{ 
                letterSpacing: '-1px', 
                lineHeight: '1.25em',
                color: 'var(--cleanx-navy)'
              }}
            >
              We Maintain the Highest Standards for Our House Cleaners
            </Heading>

            {/* Features list with checkmarks */}
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="var(--cleanx-primary)" />
                    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text 
                    className="text-base font-medium"
                    style={{ color: 'var(--cleanx-navy)' }}
                  >
                    {feature}
                  </Text>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Button variant="primary" size="md" className="rounded-xl px-8 mb-4">
                Book A Free Appointment
              </Button>
              <Text 
                className="text-sm opacity-70"
                style={{ color: 'var(--cleanx-navy)' }}
              >
                34 cleans booked in the last 24 hours
              </Text>
            </div>
          </div>

          {/* Right: Images collage */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Image 1 - Top */}
            <div 
              className="absolute top-0 right-12 w-72 h-96"
              style={{ zIndex: 3 }}
            >
              <img 
                src="/images/ThqCXCKro1Xagv1MRhRDkMv1XUA.avif" 
                alt="Professional cleaner"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Sparkle 1 - near image 1 */}
            <div className="absolute top-32 right-4 text-2xl" style={{ zIndex: 4 }}>✦</div>

            {/* Image 2 - Left (taller) */}
            <div 
              className="absolute bottom-0 left-0 w-56 h-80"
              style={{ zIndex: 2 }}
            >
              <img 
                src="/images/rb1S2aSX4fvYj9YqC8rafU2pYk.avif" 
                alt="Kitchen cleaning"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Sparkle 2 - between images */}
            <div className="absolute top-48 left-56 text-xl" style={{ zIndex: 5 }}>✦</div>
            <div className="absolute top-56 left-60 text-sm" style={{ zIndex: 5 }}>✦</div>

            {/* Image 3 - Right (side by side with left) */}
            <div 
              className="absolute bottom-0 right-0 w-56 h-64"
              style={{ zIndex: 3 }}
            >
              <img 
                src="/images/QvAhgEKjZxWg0F8bTNHV5GA3NI.avif" 
                alt="House cleaning"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Sparkle 3 - near image 3 */}
            <div className="absolute bottom-8 right-56 text-lg" style={{ zIndex: 4 }}>✦</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Standards;
