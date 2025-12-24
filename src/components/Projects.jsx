import React from 'react';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">Proyecto {index + 1}</div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Ver Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;