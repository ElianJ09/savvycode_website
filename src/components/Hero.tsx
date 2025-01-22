import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="Digital World Background"
          className="w-full h-full animate-fade-in opacity-90 transition-opacity duration-1000 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex items-center min-h-[calc(100vh-9rem)]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Building the digital world
            <span className="block mb-4 h-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">
              with SavvyCode
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            The software development company that turns your ideas into reality, helping you grow your business or launch your venture!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
              text-white font-medium rounded-lg hover:scale-105 transition duration-500 hover:shadow-interactive shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>  
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-gray-300 border border-gray-700 rounded-lg 
              hover:border-blue-500 hover:scale-105 hover:text-cyan-400 hover:shadow-component transition duration-500 shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;