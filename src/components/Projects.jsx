// src/components/Projects.jsx
import React from 'react';
import { projectsData } from '@/data/projectsData'; // Importa los datos
import ProjectCard from './ProjectCard'; // Importa la tarjeta

const Projects = () => {
  return (
    <section id="proyectos" className="bg-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Mapea los datos y renderiza una tarjeta por cada proyecto */}
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;