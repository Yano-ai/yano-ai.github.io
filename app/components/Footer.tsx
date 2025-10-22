'use client';

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => (
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
        <p className="text-gray-500">&copy; 2025 Yano AI Technologies. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-white"><Linkedin /></a>
          <a href="#" className="text-gray-500 hover:text-white"><Twitter /></a>
          <a href="#" className="text-gray-500 hover:text-white"><Github /></a>
        </div>
      </div>
    </div>
  </footer>
);
