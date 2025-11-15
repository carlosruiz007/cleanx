import React from 'react';
import Container from '../design/primitives/Container';
import Button from '../design/primitives/Button';

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <Container className="h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="/cleanx" className="flex items-center font-heading text-2xl font-bold" style={{ color: 'var(--cleanx-navy)' }}>
          CleanX
        </a>

        {/* Center Nav - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[15px]" style={{ color: 'var(--cleanx-navy)' }}>
          <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>

        {/* CTA Button */}
        <Button variant="primary" size="md" className="rounded-xl">
          (415) 555-0132
        </Button>
      </Container>
    </header>
  );
}

export default Header;
