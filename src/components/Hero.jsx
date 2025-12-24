'use client';

import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">Hola, soy</p>
                    <h2 className="hero-title">Erick Alan De la Cruz Mendoza</h2>
                    <p className="hero-description">Desarrollador de Software</p>
                    <p className="hero-text">Especializado en crear experiencias digitales modernas, funcionales y atractivas.</p>
                    <div className="hero-buttons">
                        <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
                        <a href="#contacto" className="btn btn-secondary">Contáctame</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
