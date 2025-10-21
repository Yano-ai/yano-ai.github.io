"use client";

import React, { useState } from 'react';
import { Linkedin, Twitter, Github, BrainCircuit, Zap, ShieldCheck, Users, Lightbulb, Handshake, Target, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Reusable Helper component for section titles (consistent with main page)
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{children}</h2>
);

// Reusable Header Component
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

// Reusable Footer Component
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

// "Who We Are" Page Component
const WhoWeArePage = () => {
  const router = useRouter();

  const leadershipTeam = [
    {
      name: 'Dr. Alistair Finch',
      title: 'Founder & CEO',
      bio: 'With a Ph.D. in Machine Learning, Alistair drives our vision for AI-driven transformation, ensuring we stay at the forefront of technology.',
      image: 'https://placeholder.pics/svg/300x300/E0E7FF/000000/Alistair%20Finch',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jian Li',
      title: 'Chief Technology Officer',
      bio: 'Jian is the architect of our robust technology infrastructure, specializing in scalable cloud solutions and enterprise system integration.',
      image: 'https://placeholder.pics/svg/300x300/E0E7FF/000000/Jian%20Li',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Maria Garcia',
      title: 'Head of AI Strategy',
      bio: 'Maria translates complex business needs into actionable AI strategies, helping clients navigate their digital transformation journey.',
      image: 'https://placeholder.pics/svg/300x300/E0E7FF/000000/Maria%20Garcia',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Borgy Cabana',
      title: 'Seasoned Professional',
      bio: 'Borgy Cabana is a seasoned professional at 41 years old...',
      image: '/images/borgy-cabana.png',
      social: {}
    },
    {
      name: 'Willart Yao',
      title: 'AI-Powered Web Developer',
      bio: 'An emerging web developer, Willart Yao brings almost a year of expertise in developing dynamic and scalable web applications, with a specialisation in advanced AI integration.',
      image: '/images/ey.jpg',
      social: { linkedin: '#', github: 'https://github.com/willartyao' }
    },
    {
      name: 'Jade Tizon',
      title: 'AI Solutions Architect',
      bio: 'Jade designs and optimizes intelligent systems that integrate machine learning and data-driven automation to enhance business performance and decision-making.',
      image: '/image-aiko/jade-tizon.png',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Jade Tizon',
      title: 'Software Engineer',
      bio: 'Jade Tizon is a highly skilled software engineer with a passion for building innovative solutions. With expertise in various programming languages and frameworks, Jade Tizon contributes to the development of robust and scalable applications.',
      image: 'https://via.placeholder.com/400',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  const companyValues = [
    { icon: <Lightbulb className="w-10 h-10 text-blue-600" />, title: 'Innovation', description: 'We constantly explore new technologies to deliver groundbreaking solutions.' },
    { icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, title: 'Integrity', description: 'We build trust through transparent, ethical, and responsible practices.' },
    { icon: <Handshake className="w-10 h-10 text-blue-600" />, title: 'Collaboration', description: 'We partner with our clients to achieve shared success and mutual growth.' },
    { icon: <Target className="w-10 h-10 text-blue-600" />, title: 'Excellence', description: 'We are committed to the highest standards of quality in everything we do.' },
  ];

  return (
    <div className="bg-white font-sans text-gray-700">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Who We Are</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of innovators, strategists, and engineers dedicated to harnessing the power of AI to build a more efficient and intelligent future for business.
            </p>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Our Leadership</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => {
                const isBorgyCabana = member.name === 'Borgy Cabana';
                const isWillartYao = member.name === 'Willart Yao';
                const isJadeTizon = member.name === 'Jade Tizon';

                return (
                  <div
                    key={index}
                    className="relative bg-gray-50 text-center p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200"
                  >
                    {isBorgyCabana && (
                      <a
                        href="/about/borgy-cabana"
                        className="absolute inset-0 z-10"
                        aria-label={`Learn more about ${member.name}`}
                      >
                        <span className="sr-only">Go to Borgy Cabana's page</span>
                      </a>
                    )}
                    {isWillartYao && (
                      <a
                        href="/about/willart-yao"
                        className="absolute inset-0 z-10"
                        aria-label={`Learn more about ${member.name}`}
                      >
                        <span className="sr-only">Go to Willart Yao's page</span>
                      </a>
                    )}
                    {isJadeTizon && (
                      <a
                        href="/about/banong"
                        className="absolute inset-0 z-10"
                        aria-label={`Learn more about ${member.name}`}
                      >
                        <span className="sr-only">Go to Jade Tizon's page</span>
                      </a>
                    )}
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg relative z-0" />
                    <h3 className="text-xl font-bold text-gray-800 relative z-0">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3 relative z-0">{member.title}</p>
                    <p className="text-gray-600 mb-4 relative z-0">{member.bio}</p>
                    <div className="flex justify-center space-x-4 relative z-20">
                      {member.social.linkedin && <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-700" onClick={(e) => e.stopPropagation()}><Linkedin /></a>}
                      {member.social.twitter && <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500" onClick={(e) => e.stopPropagation()}><Twitter /></a>}
                      {member.social.github && <a href={member.social.github} className="text-gray-500 hover:text-gray-900" onClick={(e) => e.stopPropagation()}><Github /></a>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section id="values" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionTitle>Our Core Values</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center items-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section id="culture" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Culture of Collaboration</h2>
                <p className="text-gray-600 mb-4">
                  At Yano AI, we foster a culture of curiosity, continuous learning, and mutual respect. We believe that the best ideas emerge when diverse minds come together to solve problems.
                </p>
                <p className="text-gray-600">
                  Our work environment is designed to be open and inclusive, encouraging every team member to contribute their unique perspective. We invest in our people, providing the tools and opportunities they need to grow both professionally and personally.
                </p>
              </div>
              <div>
                <img src="https://placeholder.pics/svg/500x400/E0E7FF/000000/Collaborative%20Team" alt="Yano AI Team Culture" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default WhoWeArePage;
