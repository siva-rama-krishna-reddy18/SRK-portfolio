
import React from 'react';
import { Book, Calendar, Award, Hexagon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const About = () => {
  const education = [
    {
      year: "2017-2021",
      title: "Bachelor's in Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      description: "Foundation in engineering principles and technology"
    },
    {
      year: "2023-2025",
      title: "Master's in Computer Science",
      institution: "Florida Atlantic University",
      description: "Advanced studies in computer science and cloud technologies"
    }
  ];

  const experience = [
    {
      year: "2020-2024",
      title: "Cloud Computing Specialist",
      institution: "4 Years Industry Experience",
      description: "Designing, deploying, and managing scalable cloud infrastructure"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services", 
      date: "2023",
      status: "Active",
      description: "AWS Certified Cloud Practitioner with a strong foundation in AWS core services, cloud concepts, billing, and security best practices"
    },
    {
      title: "Python Foundation Certificate",
      issuer: "Infosys SpringBoard", 
      date: "2025",
      status: "Active",
      description: "Skilled in Python fundamentals including data types, control structures, functions, file handling, and object-oriented programming."
    },
    {
      title: "Software Engineer Intern",
      issuer: "Hacker Rank", 
      date: "2025",
      status: "Active",
      description: "Completed the HackerRank Software Engineer Intern course, gaining hands-on experience in data structures, algorithms, and real-world coding challenges."
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services", 
      date: "2025",
      status: "Active",
      description: "Completed AWS Cloud Technical Essentials, gaining hands-on knowledge of core AWS services, cloud architecture, and deployment best practices."
    },
    {
      title: "Career Essentials in Github Professional Certificate",
      issuer: "Github", 
      date: "2025",
      status: "Active",
      description: "Completed the Career Essentials in GitHub Professional Certificate, gaining practical skills in version control, Git, GitHub workflows, and collaboration best practices for software development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about cloud technologies and infrastructure automation, I bring a unique blend of 
            engineering foundation and advanced computer science knowledge to deliver robust cloud solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <Book size={16} />
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Calendar size={16} />
                Experience
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award size={16} />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-0">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                {education.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-12 last:mb-0">
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
                    
                    <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                      <div className="flex items-center mb-3">
                        <Book className="text-blue-500 mr-2" size={20} />
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-3">{item.institution}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                
                {experience.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-12 last:mb-0">
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg"></div>
                    
                    <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                      <div className="flex items-center mb-3">
                        <Calendar className="text-purple-500 mr-2" size={20} />
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <h4 className="text-lg text-purple-600 font-medium mb-3">{item.institution}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
                
                <TooltipProvider>
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {certifications.map((cert, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <div className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
                            <Hexagon 
                              size={48} 
                              className="text-blue-500 hover:text-purple-500 transition-colors duration-200"
                              fill="currentColor"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-semibold">{cert.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Award className="text-purple-500 mr-3" size={24} />
                        <div>
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            {cert.date}
                          </span>
                          <div className="flex items-center mt-1">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              cert.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {cert.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <h4 className="text-md text-purple-600 font-medium mb-3">{cert.issuer}</h4>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
