
import React from 'react';
import { Book, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2020",
      type: "education",
      title: "Bachelor's in Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      description: "Foundation in engineering principles and technology"
    },
    {
      year: "2022",
      type: "education", 
      title: "Master's in Computer Science",
      institution: "Florida Atlantic University",
      description: "Advanced studies in computer science and cloud technologies"
    },
    {
      year: "2020-2024",
      type: "experience",
      title: "Cloud Computing Specialist",
      institution: "4 Years Industry Experience",
      description: "Designing, deploying, and managing scalable cloud infrastructure"
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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
                
                <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    {item.type === 'education' ? (
                      <Book className="text-blue-500 mr-2" size={20} />
                    ) : (
                      <Calendar className="text-purple-500 mr-2" size={20} />
                    )}
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
        </div>
      </div>
    </section>
  );
};

export default About;
