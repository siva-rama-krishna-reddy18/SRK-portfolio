
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
            SK
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Siva Rama Krishna Reddy
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
            Kunchala
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Experienced cloud computing specialist with <span className="text-blue-400 font-semibold">4 years</span> in the industry, 
            excelling in designing, deploying, and managing cloud infrastructure. 
            Proficient in AWS and Google Cloud, emphasizing automation, scalability, and security.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['AWS Cloud', 'Google Cloud', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill, index) => (
              <span 
                key={skill}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-blue-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
