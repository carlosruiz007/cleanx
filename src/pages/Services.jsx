import React from 'react';

function Services() {
  const services = [
    {
      title: "House Cleaning",
      description: "Comprehensive residential cleaning for homes of all sizes. Our professional team ensures every corner of your home is spotless, using eco-friendly products for your family's safety.",
      features: [
        "Deep cleaning of all rooms",
        "Kitchen and bathroom sanitization",
        "Dusting and vacuuming",
        "Window cleaning",
        "Customizable cleaning plans"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "Starting at $120"
    },
    {
      title: "Office Cleaning",
      description: "Professional office cleaning services that create a healthy and productive work environment. We handle everything from desks to conference rooms, ensuring your workplace shines.",
      features: [
        "Daily or weekly cleaning schedules",
        "Desk and workstation cleaning",
        "Conference room maintenance",
        "Restroom sanitization",
        "Break room cleaning"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "Starting at $150"
    },
    {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning services for those times when your space needs extra attention. Perfect for seasonal cleaning, special events, or just a fresh start.",
      features: [
        "Detailed cleaning of all surfaces",
        "Appliance cleaning (inside & out)",
        "Baseboard and trim cleaning",
        "Carpet and upholstery cleaning",
        "Hard-to-reach areas"
      ],
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "Starting at $200"
    },
    {
      title: "Move In/Out Cleaning",
      description: "Make your move stress-free with our comprehensive move-in or move-out cleaning service. We'll ensure your old or new place is spotless.",
      features: [
        "Complete property cleaning",
        "Cabinet and closet cleaning",
        "Appliance deep clean",
        "Wall and baseboard washing",
        "Flexible scheduling"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "Starting at $250"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-welcome-blue mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl font-bold text-welcome-blue mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-welcome-green mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-welcome-green">
                      {service.price}
                    </span>
                    <a
                      href="/#book"
                      className="bg-welcome-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-welcome-green-light transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-welcome-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Crystal Clean Service?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free quote and let us handle the cleaning while you enjoy your time.
          </p>
          <a
            href="/#book"
            className="inline-block bg-welcome-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-welcome-green-light transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
