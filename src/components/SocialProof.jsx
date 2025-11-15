import React from 'react';

const SocialProof = () => {
  const ratings = [
    { platform: "TripAdvisor", rating: "+4.9/5" },
    { platform: "Google", rating: "+4.9/5" },
    { platform: "G2.com", rating: "+4.9/5" },
    { platform: "Trustpilot", rating: "+4.9/5" }
  ];

  const testimonials = [
    {
      text: "Excellent service! The cleaning team was punctual, professional, and very thorough. They left my home spotless and sparkling. Highly recommended!",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "Outstanding experience from start to finish. The team was meticulous with every detail and used eco-friendly products. My office has never looked better!",
      author: "Michael R.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-welcome-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-welcome-blue mb-6">
            2,500+ satisfied customers every year
          </h2>
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {ratings.map((rating, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-welcome-green mb-2">
                {rating.rating}
              </div>
              <div className="text-welcome-gray font-semibold">
                {rating.platform}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials with photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-welcome-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-welcome-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-welcome-blue">{testimonial.author}</div>
                  <div className="text-welcome-gray text-sm">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
