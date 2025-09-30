import React from 'react';

const About = () => {
  return (
    <section id="acerca" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Acerca de Mí
        </h2>
        <div className="bg-white p-8 rounded-lg custom-shadow">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hola, soy Erick De la Cruz, un estudiante de Ingeniería en Software con una gran pasión por el
            desarrollo de software de calidad. Mi objetivo es crear soluciones digitales robustas y funcionales
            que ayuden a pequeñas empresas y personas a lograr sus metas en línea.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Me enfoco en entender el problema real del usuario para construir productos que no solo
            funcionen, sino que también sean intuitivos y agradables de usar. Estoy comprometido con el
            aprendizaje continuo y siempre busco las mejores prácticas para cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;