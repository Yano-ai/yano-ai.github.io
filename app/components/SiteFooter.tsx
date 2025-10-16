import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

const SiteFooter = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Yano AI Technologies</h3>
          <p className="text-gray-400">Transforming Business Through Intelligent Solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">I.T. Solutions</Link></li>
            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">AI Automation</Link></li>
            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Consultancy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email for newsletter"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Yano AI Technologies. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" aria-label="Github" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
