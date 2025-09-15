const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="sobre-mi" className="relative min-h-screen bg-gray-50	 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Maxi Moyano
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Desarrollador Backend & AI
          </p>

          <div className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto space-y-4">
            <p>
              Diseño y desarrollo sistemas backend enfocados en eficiencia y escalabilidad, impulsados por datos e Inteligencia Artificial. También cuento con experiencia en frontend, lo que me permite trabajar en soluciones completas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="group inline-flex items-center justify-center rounded-xl px-10 py-4 text-lg font-medium text-white bg-gray-900 hover:bg-gray-700"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="group inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-gray-900 bg-white/80 rounded-xl border-1 border-gray-500 hover:bg-gray-200"
            >
              <span className="relative z-10">Contactarme</span>
              <svg className="w-5 h-5 ml-3 transform group-hover:scale-110 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>


    </section>
  )
}

export default Hero;
