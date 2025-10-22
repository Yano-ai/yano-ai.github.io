"use client";

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const JadeTizonProfilePage = () => {
  const member = {
    name: 'Jade Tizon',
    title: 'AI Solutions Architect & Software Engineer',
    bio: `Jade Tizon is a dedicated web designer and developer specializing in AI and machine learning. With a strong foundation in front-end and back-end technologies, Jade crafts intuitive, responsive websites that leverage machine learning algorithms to deliver personalized user experiences, predictive analytics, and intelligent automation. Passionate about bridging design aesthetics with advanced tech, Jade focuses on creating scalable solutions that drive innovation and efficiency for clients across various industries.`,
    image: '/image-aiko/jade-tizon.png',
    social: { linkedin: '#', twitter: '#', github: '#' }
  };

  return (
    <div className="bg-white font-sans text-gray-700">
      <Header />
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
      <Footer />
    </div>
  );
};

export default JadeTizonProfilePage;
