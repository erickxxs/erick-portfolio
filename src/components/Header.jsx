import React from 'react';
import Image from 'next/image'; // Usaremos el componente Image de Next.js

const Header = () => {
  return (
    <header className="bg-white text-gray-800 py-16 custom-shadow">
      <div className="container mx-auto text-center px-4">
        <div className="mb-4">
          {/* Reemplaza <img> con <Image> de Next.js para optimización */}
          <Image
            src="/erick-profile.jpeg" // Necesitarás guardar tu foto en la carpeta /public
            alt="Foto de perfil de Erick"
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Erick Alan De la Cruz Mendoza
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
          Desarrollador de Software
        </p>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Creando software de calidad para una presencia digital que destaque.
        </p>
        <a href="#contacto"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Hablemos de tu proyecto
        </a>
      </div>
    </header>
  );
};

export default Header;