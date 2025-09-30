import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-3xl md:text-4xl font-bold mb-10">
          Contacto
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Si te interesa mi trabajo o quieres que hablemos sobre tu próximo proyecto, no dudes en contactarme.
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
          <a 
            href="mailto:edelacruzm003@gmail.com"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Enviar Correo
          </a>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/erickdelacruzm"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.784 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="https://github.com/erickxxs" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-gray-300 transition duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.864 8.165 6.83 9.488.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.528 2.342 1.086 2.912.83.091-.645.35-1.086.634-1.336-2.22-.252-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.6 3.6 0 01.1-.968s.84-.268 2.75 1.025c.797-.222 1.65-.333 2.5-.333.85 0 1.703.111 2.5.333 1.91-1.293 2.75-1.025 2.75-1.025.1.336.2.73.3 1.135.64 0 1.163.468 1.487 1.07.64.696 1.03 1.59 1.03 2.68 0 3.84-2.335 4.69-4.565 4.94.357.308.675.918.675 1.854 0 1.336-.011 2.417-.011 2.74 0 .267.18.575.688.484A10.016 10.016 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;