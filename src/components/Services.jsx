import React from 'react';

const Services = () => {
    return (
        <section id="servicios" className="services">
            <div className="container">
                <h2 className="section-title">Servicios</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h3>Desarrollo Web</h3>
                        <p>Creación de sitios web modernos, responsivos y optimizados para SEO.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <h3>Diseño UI/UX</h3>
                        <p>Interfaces intuitivas y experiencias de usuario excepcionales.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </div>
                        <h3>Aplicaciones Web</h3>
                        <p>Soluciones web escalables y de alto rendimiento.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
