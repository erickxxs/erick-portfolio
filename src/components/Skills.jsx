import React from 'react';
import Image from 'next/image';

// Datos de las habilidades. Fácil de actualizar.
const skillsData = [
  { name: 'HTML', icon: '/icons/html.png' },
  { name: 'CSS', icon: '/icons/css.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
  { name: 'Django', icon: '/icons/django.png' },
  { name: 'Spring Boot', icon: '/icons/springboot.png' },
  { name: 'GitHub', icon: '/icons/github.png' },
  // Agrega más habilidades aquí
];

const Skills = () => {
  return (
    <section id="habilidades" className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Habilidades
        </h2>
        <div className="bg-white p-8 rounded-lg custom-shadow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Mapeamos el array de datos para generar cada item de habilidad */}
          {skillsData.map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-transform transform hover:scale-105"
            >
              <Image 
                src={skill.icon} 
                alt={`${skill.name} Logo`} 
                width={48} 
                height={48} 
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;