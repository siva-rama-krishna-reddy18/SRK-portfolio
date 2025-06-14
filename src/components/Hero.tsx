
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Python Developer', 'AWS Cloud Engineer'];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-green-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Particle effect overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <img 
                src="/placeholder.svg" 
                alt="Siva Rama Krishna Reddy Kunchala"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling as HTMLElement;
                  target.style.display = 'none';
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white hidden">
                SK
              </div>
            </div>
          </div>

          {/* Animated Professional Title */}
          <div className="mb-6">
            <div className="text-lg md:text-xl text-blue-300 font-medium h-7 flex items-center justify-center">
              <span className="mr-1">I'm a</span>
              <span className="text-purple-300 font-semibold min-w-[200px] text-left">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>
            <div className="flex justify-center mt-2">
              <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            Siva Rama Krishna Reddy
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-200 font-light">
            Kunchala
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            Experienced cloud computing specialist with <span className="text-blue-400 font-semibold">4 years</span> in the industry, 
            excelling in designing, deploying, and managing cloud infrastructure. 
            Proficient in AWS and Google Cloud, emphasizing automation, scalability, and security.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['AWS Cloud', 'Google Cloud', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill, index) => (
              <span 
                key={skill}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-blue-400 drop-shadow-lg" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
