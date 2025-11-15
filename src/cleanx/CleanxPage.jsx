import React from 'react';
import './design/tokens.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Testimonial from './sections/Testimonial';
import Steps from './sections/Steps';
import Standards from './sections/Standards';
import Footer from './sections/Footer';

function CleanxPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <Steps />
      <Standards />
      <Footer />
    </div>
  );
}

export default CleanxPage;
