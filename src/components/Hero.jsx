import React, { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    service: 'House Cleaning',
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 1,
    luggage: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
        <section className="relative h-screen bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
             }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
          <div className="relative z-10 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Clean. Fresh. Pristine.
              </h1>
              <p className="text-2xl text-gray-200 mb-8 max-w-2xl">
                Professional cleaning services for your home and office.
              </p>
            </div>

            {/* Right side - Booking form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-welcome-green focus:border-transparent transition-all duration-200"
                  >
                    <option value="House Cleaning">House Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move In/Out">Move In/Out Cleaning</option>
                  </select>
                </div>

                {/* From and To */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-welcome-green focus:border-transparent transition-all duration-200"
                      placeholder="Enter property address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      City / Zip Code
                    </label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-welcome-green focus:border-transparent transition-all duration-200"
                      placeholder="Enter city or zip code"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-welcome-green focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-welcome-green focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Passengers and Luggage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Bedrooms
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, passengers: Math.max(1, formData.passengers - 1)})}
                        className="px-4 py-3 text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="px-4 py-3 border-x border-gray-300">{formData.passengers}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, passengers: formData.passengers + 1})}
                        className="px-4 py-3 text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Bathrooms
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, luggage: Math.max(0, formData.luggage - 1)})}
                        className="px-4 py-3 text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="px-4 py-3 border-x border-gray-300">{formData.luggage}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, luggage: formData.luggage + 1})}
                        className="px-4 py-3 text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-welcome-green text-white py-4 px-6 rounded-lg font-semibold hover:bg-welcome-green-light transition-colors duration-200 text-lg"
                >
                  Continue
                </button>

                <p className="text-center text-sm text-gray-500">
                  Serving homes and offices across the Bay Area
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
