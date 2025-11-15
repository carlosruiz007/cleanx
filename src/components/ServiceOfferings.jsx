import React from 'react';

const ServiceOfferings = () => {
  const services = [
    {
      title: "House Cleaning",
      description: "Comprehensive residential cleaning for homes of all sizes. Our professional team ensures every corner of your home is spotless, using eco-friendly products for your family's safety.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#house-cleaning"
    },
    {
      title: "Office Cleaning",
      description: "Professional office cleaning services that create a healthy and productive work environment. We handle everything from desks to conference rooms, ensuring your workplace shines.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#office-cleaning"
    },
    {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning services for those times when your space needs extra attention. Perfect for seasonal cleaning, special events, or just a fresh start.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#deep-cleaning"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-welcome-blue mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-welcome-green font-semibold hover:text-welcome-green-light transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
