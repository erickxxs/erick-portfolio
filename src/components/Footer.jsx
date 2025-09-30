import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Calcula el año actual dinámicamente

  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="text-sm">
        &copy; {currentYear} Erick De la Cruz Mendoza. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;