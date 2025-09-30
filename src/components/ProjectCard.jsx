// src/components/ProjectCard.jsx
import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, image, description, tags, demoUrl, githubUrl }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="relative w-full h-52 mb-4">
        <Image
          src={image}
          alt={`Captura de pantalla de ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-600 mb-4 h-24 overflow-auto">{description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-auto">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Ver Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;