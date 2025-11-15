import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-welcome-blue mb-6">
              About Crystal Cleaners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for professional cleaning services in the Bay Area
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-welcome-blue mb-12 text-center">
            Reasons to Choose Crystal Cleaners, Today
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/assets/crystal-cleaners.jpg"
                alt="Professional cleaning equipment"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-welcome-blue mb-3">
                  Experienced Professionals
                </h3>
                <p className="text-gray-600">
                  Our team consists of trained and certified cleaning professionals with years of experience in residential and commercial cleaning.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-welcome-blue mb-3">
                  Eco-Friendly Products
                </h3>
                <p className="text-gray-600">
                  We use environmentally safe cleaning products that are tough on dirt but gentle on your family and pets.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-welcome-blue mb-3">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-600">
                  We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Choose Crystal Cleaners for exceptional cleaning services. Contact us today to schedule your first cleaning session and experience the difference. Our dedicated team is committed to providing thorough, reliable service that exceeds your expectations every time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-welcome-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Availability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
