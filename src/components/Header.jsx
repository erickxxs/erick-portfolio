'use client';

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">
          <h1 className="logo">Portafolio</h1>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#sobre-mi" className="nav-link" onClick={closeMenu}>Sobre Mí</a></li>
          <li><a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#proyectos" className="nav-link" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#contacto" className="nav-link" onClick={closeMenu}>Contacto</a></li>
        </ul>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;