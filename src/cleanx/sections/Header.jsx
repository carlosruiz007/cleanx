import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../design/primitives/Container';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const callHref = 'tel:+14155550132';
const callLabel = '(415) 555-0132';

const callButtonClass =
  'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cleanx-primary)] focus-visible:ring-offset-2 px-[18px] py-[12px] text-[15px] leading-[22px] bg-[var(--cleanx-primary)] text-white hover:opacity-90';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = () => setMenuOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container className="h-20 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center font-heading text-2xl font-bold shrink-0"
          style={{ color: 'var(--cleanx-navy)' }}
          onClick={closeMenu}
        >
          CleanX
        </Link>

        <nav
          className="hidden md:flex items-center gap-8 font-sans text-[15px]"
          style={{ color: 'var(--cleanx-navy)' }}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-70 transition-opacity">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={callHref} className={`${callButtonClass} text-sm sm:text-[15px]`}>
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{callLabel}</span>
          </a>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-[var(--cleanx-navy)] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cleanx-primary)]"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-20 z-40 bg-black/30 md:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id="mobile-nav"
            className="fixed left-0 right-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-gray-100 bg-white px-6 py-4 shadow-lg md:hidden"
            aria-label="Mobile primary"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--cleanx-navy)] hover:bg-[var(--cleanx-bg)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100 mt-2">
                <a
                  href={callHref}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--cleanx-primary)]"
                  onClick={closeMenu}
                >
                  {callLabel}
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
