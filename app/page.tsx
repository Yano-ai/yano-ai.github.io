"use client";

import React, { useState } from 'react';
import { Cpu, Server, BrainCircuit, Bot, Zap, ShieldCheck, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

// Helper component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{children}</h2>
);

// Main Website Component
const YanoAITechnologiesWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-white font-sans text-gray-700">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">
            Yano<span className="text-blue-600">AI</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
            Get a Quote
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105" onClick={() => setMenuOpen(false)}>
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-gray-100"></div>
            <div className="absolute inset-0 opacity-10">
                {/* Subtle geometric patterns */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                            <circle id="pattern-circle" cx="20" cy="20" r="1" fill="#0000ff"></circle>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                </svg>
            </div>
          <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Yano AI Technologies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforming Business Through Intelligent Solutions
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </a>
              <a href="#services" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Our Core Services</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 inline-block mb-4">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">I.T. Solutions</h3>
                <p className="text-gray-600">Enterprise infrastructure, cloud services, and seamless system integration to power your business operations.</p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 inline-block mb-4">
                  <Bot className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">AI Automation</h3>
                <p className="text-gray-600">Intelligent process automation, workflow optimization, and custom AI solutions to boost efficiency.</p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 inline-block mb-4">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Consultancy</h3>
                <p className="text-gray-600">Digital transformation strategy, AI implementation roadmaps, and expert technical advisory.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Yano AI</h2>
                <p className="text-gray-600 mb-4">
                  Yano AI Technologies is a premier provider of advanced AI and IT solutions. We specialize in leveraging cutting-edge technology to solve complex business challenges, driving growth and innovation for our clients.
                </p>
                <p className="text-gray-600 font-semibold mb-6">
                  Our mission is to empower businesses to achieve their full potential through intelligent automation and digital transformation.
                </p>
                <div className="flex space-x-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">10+</p>
                    <p className="text-gray-500">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">150+</p>
                    <p className="text-gray-500">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">99%</p>
                    <p className="text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="https://placeholder.pics/svg/500x400/E0E7FF/000000/Professional%20Team" alt="Yano AI Team" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Why Partner With Us</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <Cpu className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600">Our certified professionals bring years of industry experience and deep technical expertise.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <Zap className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cutting-Edge Tech</h3>
                <p className="text-gray-600">We utilize the latest advancements in AI and cloud technology to deliver superior solutions.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <ShieldCheck className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
                <p className="text-gray-600">We have a track record of delivering measurable improvements and significant ROI.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M12 12v2"/><path d="M12 8h.01"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Our team provides ongoing support to ensure your systems run smoothly and efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service of Interest</label>
                    <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>I.T. Solutions</option>
                      <option>AI Automation</option>
                      <option>Consultancy</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h3>
                  <p className="flex items-center text-gray-600 mb-2"><Mail className="w-5 h-5 mr-3 text-blue-600" /> contact@yano.ai</p>
                  <p className="flex items-center text-gray-600"><Phone className="w-5 h-5 mr-3 text-blue-600" /> (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-500 hover:text-blue-600"><Github className="w-6 h-6" /></a>
                  </div>
                </div>
                <div>
                    <img src="https://placeholder.pics/svg/500x300/E0E7FF/000000/AI%20Visualization" alt="Abstract AI Visualization" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">I.T. Solutions</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">AI Automation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Consultancy</a></li>
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
    </div>
  );
};

export default YanoAITechnologiesWebsite;