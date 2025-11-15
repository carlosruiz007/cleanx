import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png" 
              alt="Carlos Clean Services" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-white hover:text-welcome-green-light transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-welcome-green-light transition-colors">
              About
            </Link>
            <a href="#contact" className="text-white hover:text-welcome-green-light transition-colors">
              Contact
            </a>
            <a href="#book" className="bg-welcome-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-welcome-green-light transition-colors">
              Book a service
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-welcome-green-light"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-white hover:text-welcome-green-light transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-white hover:text-welcome-green-light transition-colors">
                About
              </Link>
              <a href="#contact" className="text-white hover:text-welcome-green-light transition-colors">
                Contact
              </a>
              <a href="#book" className="bg-welcome-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-welcome-green-light transition-colors inline-block text-center">
                Book a service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
