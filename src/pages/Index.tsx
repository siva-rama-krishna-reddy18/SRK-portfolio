
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Siva Rama Krishna Reddy Kunchala. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Cloud Computing Specialist | AWS & Google Cloud Expert
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
