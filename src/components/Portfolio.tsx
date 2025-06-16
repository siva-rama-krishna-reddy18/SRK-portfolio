import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: "File Management and Backup in Wasabi Cloud Storage",
      description: "Implemented a comprehensive file management system with automated backup solutions using Wasabi Cloud Storage, ensuring data integrity and accessibility.",
      technologies: ["Wasabi Cloud", "AWS S3 API", "Python", "Automation"],
      achievements: [
        "Reduced backup time by 60%",
        "Implemented automated lifecycle policies",
        "Enhanced data security with encryption"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Audio Analyzer Application",
      description: "Developed an intelligent audio analysis system leveraging machine learning algorithms to process and analyze audio data with cloud-based infrastructure.",
      technologies: ["Google Cloud AI", "Python", "TensorFlow", "Cloud Functions"],
      achievements: [
        "Achieved 95% accuracy in audio classification",
        "Processed 10,000+ hours of audio data",
        "Scalable serverless architecture"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Secure & Scalable AWS VPC Architecture",
      description: "Designed and deployed a highly available, secure, and scalable VPC architecture in AWS, ensuring efficient resource management, security, and resilience for production workloads following AWS best practices.",
      technologies: ["AWS VPC", "Application Load Balancer", "Auto Scaling Group", "NAT Gateway", "S3 VPC Endpoint"],
      achievements: [
        "Improved security with private subnet architecture",
        "Ensured high availability with multi-AZ deployments",
        "Enhanced network resilience with multiple NAT Gateways",
        "Optimized cost and performance with VPC endpoints"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Book Knowledge ChatBot with Shakespeare's Complete Works",
      description: "A web-based application that uses Google Cloud Run, Flask, and Dialogflow to provide answers to book-related queries. The project centers on the Complete Works of William Shakespeare, available through Project Gutenberg, and integrates a chatbot interface for seamless user interaction.",
      technologies: ["Google Cloud Run", "Flask", "Dialogflow CX", "Project Gutenberg API", "Python"],
      achievements: [
        "Integrated Dialogflow CX Agent for intelligent responses",
        "Processed complete Shakespeare literary corpus",
        "Deployed scalable serverless architecture",
        "Seamless chatbot interface for user queries"
      ],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const projects_to_show = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      projects_to_show.push({ ...projects[index], displayIndex: i });
    }
    return projects_to_show;
  };

  const [visibleProjects, setVisibleProjects] = React.useState(getVisibleProjects());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleProjects(getVisibleProjects());
    };
    
    window.addEventListener('resize', handleResize);
    setVisibleProjects(getVisibleProjects());
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform scale-x-0 animate-[scale-x-100_0.8s_ease-out_0.3s_forwards] origin-left"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
            Explore some of my key projects that demonstrate expertise in cloud infrastructure, 
            automation, and innovative solutions.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            aria-label="Next project"
          >
            <ChevronRight size={24} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {visibleProjects.map((project, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 opacity-0 animate-fade-in transform translate-y-8"
                style={{ 
                  animationDelay: `${0.2 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="flex items-center text-gray-300 group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-x-1"
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                          <ArrowRight className="text-green-400 mr-2 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300 border border-gray-600 hover:border-blue-400 hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
