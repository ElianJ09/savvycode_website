import React, { useEffect, useState } from 'react';
import { Code2, Smartphone, Globe, Database, Shield, LineChart, Computer } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs and challenges.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Responsive and modern web applications using cutting-edge technologies.'
  },
  {
    icon: <Computer className="h-8 w-8" />,
    title: "Desktop App",
    description: 'Native desktops applications for Computers'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Digital Consulting',
    description: 'Strategic guidance to help you navigate digital transformation.'
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa la animación al cargar el componente
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="py-20 bg-secondaryDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-tertiaryDark rounded-lg shadow-lg hover:shadow-xl border border-violet-950 shadow-lg shadow-[0_4px_10px_rgba(72,42,99,0.08),0_10px_15px_rgba(67,56,255,0.1),0_15px_20px_rgba(0,10,0,0.2)]
                ${isVisible ? 'opacity-100 translate-y-0 animate-fade-up' : 'opacity-0 translate-y-4'}`}
            >
              <div className="text-violet-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
