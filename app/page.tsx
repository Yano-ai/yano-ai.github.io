"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, BrainCircuit, Bot, Zap, ShieldCheck, Mail, Phone, Linkedin, Twitter, Github, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

// Reusable Section Wrapper for Animations
const AnimatedSection = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

// Reusable Section Title
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-neutral-900 mb-12">{children}</h2>
);

// Main Page Component
export default function YanoAIPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/profile', label: 'Profile' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-neutral-50 font-sans text-neutral-600">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-neutral-900">
            Yano<span className="text-primary">AI</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-neutral-600 hover:text-primary transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
            Get a Quote
          </a>
          <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={clsx("md:hidden fixed inset-0 bg-white transition-transform transform", menuOpen ? "translate-x-0" : "translate-x-full")}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-2xl text-neutral-800 hover:text-primary" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-primary text-white font-semibold px-8 py-3 rounded-lg text-lg" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-neutral-100/20"></div>
          <div className="container mx-auto px-6 py-24 md:py-36 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Yano AI Technologies
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming Business Through Intelligent Solutions
            </motion.p>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contact" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </a>
              <a href="#services" className="bg-white text-primary font-bold py-3 px-8 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection id="services" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Our Core Services</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Server, title: "I.T. Solutions", desc: "Enterprise infrastructure, cloud services, and seamless system integration to power your business operations." },
                { icon: Bot, title: "AI Automation", desc: "Intelligent process automation, workflow optimization, and custom AI solutions to boost efficiency." },
                { icon: BrainCircuit, title: "Consultancy", desc: "Digital transformation strategy, AI implementation roadmaps, and expert technical advisory." }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  className="bg-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-neutral-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-primary-light text-primary rounded-full p-3 inline-block mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="py-20 md:py-28 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6">Pioneering the Future of Enterprise AI</h2>
                <p className="mb-4">
                  Yano AI Technologies is a premier provider of advanced AI and IT solutions. We specialize in leveraging cutting-edge technology to solve complex business challenges, driving growth and innovation for our clients.
                </p>
                <p className="font-semibold mb-8">
                  Our mission is to empower businesses to achieve their full potential through intelligent automation and digital transformation.
                </p>
                <div className="flex space-x-8">
                  {[
                    { value: "10+", label: "Years of Experience" },
                    { value: "150+", label: "Projects Completed" },
                    { value: "99%", label: "Client Satisfaction" }
                  ].map(stat => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-neutral-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <img src="https://placeholder.pics/svg/500x400/E7F0FF/0D63F3/Professional%20Team" alt="Yano AI Team" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection id="why-us" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Why Partner With Us</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Cpu, title: "Expert Team", desc: "Our certified professionals bring years of industry experience and deep technical expertise." },
                { icon: Zap, title: "Cutting-Edge Tech", desc: "We utilize the latest advancements in AI and cloud technology to deliver superior solutions." },
                { icon: ShieldCheck, title: "Proven Results", desc: "We have a track record of delivering measurable improvements and significant ROI." },
                { icon: Bot, title: "Dedicated Support", desc: "Our team provides ongoing support to ensure your systems run smoothly and efficiently." }
              ].map(item => (
                <div key={item.title} className="text-center p-6">
                  <div className="flex justify-center items-center mb-4 text-primary">
                    <item.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 md:py-28 bg-neutral-50">
          <div className="container mx-auto px-6">
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-neutral-800 font-semibold mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-neutral-800 font-semibold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-neutral-800 font-semibold mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Contact Information</h3>
                  <p className="flex items-center mb-2"><Mail className="w-5 h-5 mr-3 text-primary" /> contact@yano.ai</p>
                  <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-primary" /> (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-neutral-500 hover:text-primary"><Linkedin /></a>
                    <a href="#" className="text-neutral-500 hover:text-primary"><Twitter /></a>
                    <a href="#" className="text-neutral-500 hover:text-primary"><Github /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Yano<span className="text-primary">AI</span></h3>
              <p className="text-neutral-400">Transforming Business Through Intelligent Solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-neutral-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-neutral-400 hover:text-white">I.T. Solutions</a></li>
                <li><a href="#services" className="text-neutral-400 hover:text-white">AI Automation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-neutral-400">123 Tech Avenue, Silicon Valley</p>
              <p className="text-neutral-400">contact@yano.ai</p>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500">&copy; {new Date().getFullYear()} Yano AI Technologies. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-neutral-500 hover:text-white"><Twitter /></a>
              <a href="#" className="text-neutral-500 hover:text-white"><Github /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}