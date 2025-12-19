'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 border-b border-neutral-200 sticky top-0 z-50 backdrop-blur">
      <Container className="flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-semibold tracking-tight text-neutral-900">
            Residential Rights
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-primary-700">
            Legal Counsel
          </span>
        </Link>

        {/* Testing banner */}
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 text-center">
            <strong>Notice:</strong> This site is currently in testing. 
            No legal services are being provided and no attorney–client relationship is formed.
         </div>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="text-sm font-semibold rounded-full px-5 py-2.5 bg-primary-600 text-white hover:bg-primary-700 shadow-sm transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden p-2 text-neutral-700 hover:text-primary-700"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <Container className="py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-neutral-800 hover:text-primary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="mt-2 mb-1 text-sm font-semibold rounded-full px-4 py-2 bg-primary-600 text-white text-center hover:bg-primary-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
