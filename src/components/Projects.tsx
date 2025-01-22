import React from 'react';

const projects = [
  {
    title: 'Inventory System App',
    description: 'An application platform with real-time inventory management.',
    image: '/public/inventory-managment.png',
    tags: ['App', 'Cross-platform', 'Inventory']
  },
  {
    title: 'Managment Sales App',
    description: 'Digital solution for managing inventories and sales.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    tags: ['Desktop', 'Managment', 'App']
  },
  {
    title: 'Analytics Sales Dashboard',
    description: 'Real-time financial data visualization and analysis platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Analytics', 'IA', 'Cloud']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden transition ease-in-out delay-100 hover:scale-105 hover:shadow-[0_4px_10px_rgba(72,42,99,0.08),0_10px_15px_rgba(67,56,255,0.1),0_15px_20px_rgba(234,10,238,0.2)] transition-shadow border border-gray-700 shadow-lg shadow-[0_4px_10px_rgba(72,42,99,0.08),0_10px_15px_rgba(67,56,255,0.1),0_15px_20px_rgba(0,10,0,0.2)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
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