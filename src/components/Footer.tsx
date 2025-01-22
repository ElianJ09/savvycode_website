import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primaryDark via-tertiaryDark to-secondaryDark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img src="/logo.png" alt="SavvyCode" className="h-12 w-auto bg-gray-900 rounded-full" />
              <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                  Savvy
                </span>
                <span className='text-2xl font-bold bg-cyan-400 bg-clip-text text-transparent'>
                  Code
                </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital excellence through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:scale-110 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:scale-110 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:scale-110 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:scale-110 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-700 ease-in-out">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-700 ease-in-out">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-700 ease-in-out">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-700 ease-in-out">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-700 ease-in-out">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Luis de La Paz</li>
              <li>Guanajuato, México, CA 37904</li>
              <li>savvy.code25@gmail.com</li>
              <li>+52 (468) 129 9615 </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SavvyCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;