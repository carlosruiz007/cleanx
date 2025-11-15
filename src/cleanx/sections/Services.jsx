import React from 'react';
import Container from '../design/primitives/Container';
import Section from '../design/primitives/Section';
import Heading from '../design/primitives/Heading';
import Text from '../design/primitives/Text';
import Card from '../design/primitives/Card';
import Button from '../design/primitives/Button';

function Services() {
  const services = [
    {
      id: 'office',
      title: 'Office Cleaning',
      image: '/images/office-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="12" width="32" height="28" rx="2" />
          <path d="M16 12V8a2 2 0 012-2h12a2 2 0 012 2v4" />
          <line x1="8" y1="20" x2="40" y2="20" />
          <line x1="24" y1="20" x2="24" y2="40" />
          <rect x="28" y="28" width="8" height="8" />
        </svg>
      )
    },
    {
      id: 'window',
      title: 'Window Cleaning',
      image: '/images/window-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <line x1="24" y1="10" x2="24" y2="38" />
          <line x1="10" y1="24" x2="38" y2="24" />
          <path d="M32 14l4 4m-4 0l4-4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'carpet',
      title: 'Carpet Cleaning',
      image: '/images/carpet-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="16" width="32" height="20" rx="2" />
          <path d="M12 20h24M12 24h24M12 28h24M12 32h24" strokeLinecap="round" />
          <path d="M16 12l4 4M32 12l-4 4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'bathroom',
      title: 'Bathroom Cleaning',
      image: '/images/bathroom-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 20h28v14a4 4 0 01-4 4H14a4 4 0 01-4-4V20z" />
          <path d="M14 20v-4a2 2 0 012-2h2" />
          <circle cx="18" cy="28" r="1.5" fill="currentColor" />
          <circle cx="24" cy="28" r="1.5" fill="currentColor" />
          <circle cx="30" cy="28" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'kitchen',
      title: 'Kitchen Cleaning',
      image: '/images/kitchen-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="10" width="24" height="28" rx="2" />
          <line x1="12" y1="18" x2="36" y2="18" />
          <rect x="18" y="22" width="12" height="8" rx="1" />
          <path d="M24 14v-2m-4 2l1-2m8 2l-1-2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'bedroom',
      title: 'Bedroom Cleaning',
      image: '/images/bedroom-cleaning.jpg',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="22" width="32" height="14" rx="2" />
          <path d="M8 28h32" />
          <line x1="12" y1="36" x2="12" y2="40" />
          <line x1="36" y1="36" x2="36" y2="40" />
          <path d="M8 22v-4a2 2 0 012-2h28a2 2 0 012 2v4" />
        </svg>
      )
    }
  ];

  return (
    <Section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: 'url(/images/feature-background.avif)' }}>
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading 
            as="h2" 
            weight="700" 
            className="text-4xl md:text-5xl mb-6"
            style={{ letterSpacing: '-1px', lineHeight: '1.25em' }}
          >
            Our Top Rated Cleaning Services
          </Heading>
          <Text className="text-lg opacity-70">
            Count on us as your dependable partner for exceptional cleaning solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements.
          </Text>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-8 rounded-3xl group hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Background image on hover - all cards */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 rounded-3xl" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <Heading
                  as="h3"
                  weight="600"
                  className="text-xl group-hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </Heading>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm inline-flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Card>
          ))}
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

export default Services;
