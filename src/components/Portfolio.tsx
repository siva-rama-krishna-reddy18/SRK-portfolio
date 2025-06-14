
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
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
    }
  ];

  return (
    <section id="Projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Notable Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of my key projects that demonstrate expertise in cloud infrastructure, 
            automation, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <ArrowRight className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300 border border-gray-600 hover:border-blue-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
