"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Yano<span className="text-blue-600">AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
          Get a Quote
        </Link>
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
