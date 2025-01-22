import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return ( 
    <nav className="fixed w-full bg-gradient-to-r from-primaryDark/80 via-tertiaryDark/80 to-secondaryDark/80 backdrop-blur-sm z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href='#home'>
            <div className="flex items-center">
              <img src="/logo.png" alt="SavvyCode" className="h-12 w-auto bg-gray-900/70 rounded-full mr-1" />
              <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                  Savvy
                </span>
                <span className='text-2xl font-bold bg-cyan-400 bg-clip-text text-transparent'>
                  Code
                </span>
            </div>
          </a> 
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 hover:scale-105 transition-colors duration-500 ease-out-in">Home</a>
            <a href="#services" className="text-white hover:text-cyan-400 hover:scale-105 transition-colors duration-500 ease-out-in">Services</a>
            <a href="#projects" className="text-white hover:text-cyan-400 hover:scale-105 transition-colors duration-500 ease-out-in">Projects</a>
            <a href="#about" className="text-white hover:text-cyan-400 hover:scale-105 transition-colors duration-500 ease-out-in">About</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:scale-105 hover:shadow-interactive duration-500 ease-out-in transition">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Projects</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
