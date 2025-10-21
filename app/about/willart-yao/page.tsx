"use client";

import React, { useState } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

// Reusable Header Component (Copied from about/page.tsx for consistency)
const SiteHeader = () => {
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
            <a key={link.href} href={link.href} className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${link.label === 'About' ? 'text-blue-600 font-semibold' : ''}`}>
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

// Reusable Footer Component (Copied from about/page.tsx for consistency)
const SiteFooter = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Yano AI Technologies</h3>
          <p className="text-gray-400">Transforming Business Through Intelligent Solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/#services" className="text-gray-400 hover:text-white">I.T. Solutions</a></li>
            <li><a href="/#services" className="text-gray-400 hover:text-white">AI Automation</a></li>
            <li><a href="/#services" className="text-gray-400 hover:text-white">Consultancy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA 94000</p>
          <p className="text-gray-400">contact@yano.ai</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Yano AI Technologies. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-white"><Linkedin /></a>
          <a href="#" className="text-gray-500 hover:text-white"><Twitter /></a>
          <a href="#" className="text-gray-500 hover:text-white"><Github /></a>
        </div>
      </div>
    </div>
  </footer>
);

const WillartYaoProfilePage = () => {
  const member = {
    name: 'Willart Yao',
    title: 'AI-Powered Web Developer',
    bio: `An emerging web developer, Willart Yao brings almost a year of expertise in developing dynamic and scalable web applications, with a specialisation in advanced AI integration.`,
    image: 'https://github.com/Yano-ai/yano-ai.github.io/blob/yaowillart-design-patch-1/willart%20yao.png', // Placeholder image
    social: { linkedin: '#', twitter: '#', github: 'https://github.com/willartyao' } // Assuming GitHub link is provided
  };

  return (
    <div className="bg-white font-sans text-gray-700">
      <SiteHeader />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <Image src={member.image} alt={member.name} width={400} height={400} className="rounded-full mx-auto shadow-lg" />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-2xl text-blue-600 font-semibold mb-4">{member.title}</p>
              {member.bio.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 mb-6">{paragraph}</p>
              ))}
              <div className="flex space-x-4">
                {member.social.linkedin && <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-700"><Linkedin size={28} /></a>}
                {member.social.twitter && <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500"><Twitter size={28} /></a>}
                {member.social.github && <a href={member.social.github} className="text-gray-500 hover:text-gray-900"><Github size={28} /></a>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default WillartYaoProfilePage;
