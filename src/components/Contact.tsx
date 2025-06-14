
import React from 'react';
import { Mail, Linkedin, Youtube, Instagram, Link, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your cloud infrastructure needs? Let's connect and explore how we can work together.
          </p>
        </div>

        {/* Contact Cards Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Email Me Card */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Email Me</h3>
            <p className="text-gray-300 mb-6">Shoot me an email, I'll get back to you asap.</p>
            <div className="bg-white text-gray-900 px-4 py-3 rounded-lg font-medium">
              srkreddykunchala@gmail.com
            </div>
          </div>

          {/* Connect on LinkedIn Card */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Connect on LinkedIn</h3>
            <p className="text-gray-300 mb-6">Let's connect and share valuable insights.</p>
            <a 
              href="https://linkedin.com/in/srkreddykunchala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-3 rounded-lg font-medium inline-block hover:bg-gray-100 transition-colors"
            >
              linkedin.com/in/srkreddykunchala
            </a>
          </div>

          {/* Stay Social Card */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Social</h3>
            <p className="text-gray-300 mb-6">Catch all the latest updates with me.</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://linkedin.com/in/srkreddykunchala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/siva-rama-krishna-reddy18/siva-rama-krishna-reddy18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <Youtube size={28} />
              </a>
              <a href="#" className="text-white hover:text-pink-400 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Link size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
