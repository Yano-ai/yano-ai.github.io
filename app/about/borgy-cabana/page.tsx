"use client";

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const BorgyCabanaProfilePage = () => {
  const member = {
    name: 'Borgy Cabana',
    title: 'Seasoned Professional',
    bio: 'Borgy Cabana is a seasoned professional at 41 years old, known for his polished demeanor and sharp business acumen. With a commanding presence in a tailored grey suit and striped tie, he navigates high-energy environments like upscale lounges with ease. Borgy brings years of experience in strategic networking and client engagement, blending sophistication with a commitment to building lasting professional relationships.',
    image: 'https://placeholder.pics/svg/400x400/E0E7FF/000000/Borgy%20Cabana',
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
              <p className="text-lg text-gray-600 mb-6">{member.bio}</p>
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

export default BorgyCabanaProfilePage;
