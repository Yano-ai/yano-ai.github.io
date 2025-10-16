"use client";

import React from 'react';
import { Linkedin, Twitter, Github, BrainCircuit, Zap, ShieldCheck, Users, Lightbulb, Handshake, Target, Mail, Phone } from 'lucide-react';

// Reusable Helper component for section titles (consistent with main page)
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{children}</h2>
);



// "Who We Are" Page Component
const WhoWeArePage = () => {
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
      name: 'DR SasanMK',
      codename: 'QuantumSassSpark',
      title: 'Innovative Web Developer & AI Specialist',
      bio: 'Crafting cutting-edge, AI-driven web solutions with a spark of creativity. Proficient in leveraging tools like TensorFlow, PyTorch, and LangChain to build intelligent, scalable applications. Passionate about fusing quantum-inspired algorithms with sleek, user-centric designs. Let\'s code the future, one sassy spark at a time! 🚀 #AIRevolution #WebDev #QuantumVibes',
      image: 'https://placeholder.pics/svg/300x300/E0E7FF/000000/DR%20SasanMK',
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
              {leadershipTeam.map((member, index) => (
                <div key={index} className="bg-gray-50 text-center p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-700"><Linkedin /></a>}
                    {member.social.twitter && <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500"><Twitter /></a>}
                    {member.social.github && <a href={member.social.github} className="text-gray-500 hover:text-gray-900"><Github /></a>}
                  </div>
                </div>
              ))}
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
    </div>
  );
};

export default WhoWeArePage;
