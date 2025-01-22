import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondaryDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About SavvyCode</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're a team of passionate developers and designers committed to delivering exceptional software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-tertiaryDark rounded-lg border border-violet-950">
            <Users className="h-12 w-12 text-violet-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">
              Our diverse team brings years of experience across various technologies and industries.
            </p>
          </div>
          <div className="text-center p-6 bg-tertiaryDark rounded-lg border border-violet-950 shadow-lg shadow-[0_4px_10px_rgba(72,42,99,0.08),0_10px_15px_rgba(67,56,255,0.1),0_15px_20px_rgba(0,10,0,0.2)]">
            <Target className="h-12 w-12 text-violet-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Client-Focused</h3>
            <p className="text-gray-300">
              We prioritize understanding your needs to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="text-center p-6 bg-tertiaryDark rounded-lg border border-violet-950">
            <Award className="h-12 w-12 text-violet-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quality First</h3>
            <p className="text-gray-300">
              We maintain high standards in every project, ensuring robust and scalable solutions.
            </p>
          </div>
        </div>

        <div className="bg-tertiaryDark rounded-lg p-8 border border-violet-950 shadow-lg shadow-[0_4px_10px_rgba(72,42,99,0.08),0_10px_15px_rgba(67,56,255,0.1),0_15px_20px_rgba(0,10,0,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-4">
                To empower businesses through innovative software solutions that drive growth and efficiency.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To be the leading software development partner known for excellence, innovation, and client success.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;