"use client";

import React, { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900">
          Yano<span className="text-blue-600">AI</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
          Get a Quote
        </a>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/#contact" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
