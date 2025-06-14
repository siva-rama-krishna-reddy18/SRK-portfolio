
import React from 'react';
import { Code, Cloud, Database, Settings, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Amazon Web Services", "EC2", "VPC", "IAM", "S3", "Lambda", "CloudWatch", "CloudTrail", "Terraform", "CI/CD"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Github"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Systems & Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Linux", "MS-Office"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proficient in a wide range of technologies and tools for cloud infrastructure, 
            development, and automation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-xl`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills showcase */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">All Skills at a Glance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skillCategories.flatMap(category => category.skills).map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-gray-800 font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
