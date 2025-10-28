"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

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

export default function ProfilePage() {
  return (
    <div className="bg-neutral-50 font-sans text-neutral-600 min-h-screen">
      <main className="pt-20"> {/* Added padding-top to account for fixed header */}
        <AnimatedSection id="profile" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>My Profile</SectionTitle>
            <div className="flex flex-col items-center max-w-3xl mx-auto bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-200">
              <motion.img
                src="/image-aiko/Roger.png" // Profile picture
                alt="Profile Picture"
                className="rounded-full w-32 h-32 object-cover mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">Roger Wasabi III</h3>
              <p className="text-lg text-neutral-700 text-center mb-6">
                Roger Wasabi III is a seasoned software engineer with a passion for building innovative web applications.
                He specializes in front-end development with React and Next.js, and has a strong background in UI/UX design.
              </p>
              <div className="flex space-x-6 mb-6">
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
                  <Twitter className="w-7 h-7" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
                  <Github className="w-7 h-7" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-neutral-800 mb-3">Skills & Expertise</h4>
                <ul className="flex flex-wrap justify-center gap-3">
                  <li className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm">Next.js</li>
                  <li className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm">React</li>
                  <li className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm">Tailwind CSS</li>
                  <li className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm">AI/ML</li>
                  <li className="bg-primary-light text-primary px-4 py-1 rounded-full text-sm">Software Development</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
