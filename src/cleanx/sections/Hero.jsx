import React from 'react';
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

  return (
    <Section className="bg-[var(--cleanx-bg)] pt-16 md:pt-20 pb-0 relative overflow-hidden min-h-[900px]">
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
              <form className="space-y-4">
                <div>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors bg-white">
                    <option>Frequency</option>
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors bg-white">
                    <option>Select Services</option>
                    <option>House Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In/Out</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--cleanx-primary)] focus:outline-none transition-colors"
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <Button variant="primary" size="md" className="w-full rounded-xl mt-4">
                  Book Free Appointment
                </Button>
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
