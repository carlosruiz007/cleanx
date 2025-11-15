import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';

function Testimonial() {
  return (
    <Section className="bg-white py-20">
      <Container>
        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      </Container>
    </Section>
  );
}

export default Testimonial;
