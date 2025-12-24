import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Soy un desarrollador web apasionado por crear soluciones digitales innovadoras y centradas en el usuario. Con experiencia en tecnologías frontend y backend, me especializo en transformar ideas en productos digitales funcionales.</p>
            <p>Mi enfoque se basa en la simplicidad, la eficiencia y la atención al detalle, asegurando que cada proyecto cumpla con los más altos estándares de calidad.</p>
            <div className="skills">
              <h3>Habilidades Técnicas</h3>
              <div className="skills-grid">
                <div className="skill-item">HTML5</div>
                <div className="skill-item">CSS3</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Next.js</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;