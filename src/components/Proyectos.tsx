import ChatbotImg from '../assets/chatbot.jpg';
import eyeDiseasesImg from '../assets/eye_diseases.webp';
import FbrefScrapyImg from '../assets/fbref_scrapy.webp';
import PortfolioImg from '../assets/portfolio.webp';

const Proyectos = () => {
    const proyectos = [
        {
            id: 1,
            titulo: "CNN para Detección de Enfermedades Oculares",
            descripcion: "Sistema de clasificación de enfermedades oculares que compara CNN (ConvNeXt) y H2O GBM para clasificación final",
            tecnologias: ["Python", "PyTorch", "H2O", "Scikit-learn", "Pandas", "Matplotlib"],
            imagen: eyeDiseasesImg,
            github: "https://github.com/MMoyanoFontana/CNN-Enfermedades-Oculares",
            demo: ""
        },
        {
            id: 2,
              titulo: "Langchain Chatbot",
              descripcion: "Chatbot con RAG (Retrieval Augmented Generation) y análisis de documentos cargados por el usuario. Permite consultas inteligentes sobre los archivos subidos y respuestas enriquecidas usando modelos de lenguaje avanzados.",
              tecnologias: ["Python", "Langchain", "LangGraph", "Gradio"],
              imagen: ChatbotImg,
              github: "https://github.com/MMoyanoFontana/Langchain-chatbot",
              demo: ""
        },
        {
            id: 3,
            titulo: "FBref Scrapy",
            descripcion: "Sistema completo de web scraping para extraer estadísticas de fútbol de FBref y API REST para acceder a los datos. Incluye modelos de base de datos para todas las métricas del fútbol profesional.",
            tecnologias: ["Python", "FastAPI", "PostgreSQL", "BeautifulSoup", "Pandas"],
            imagen: FbrefScrapyImg,
            github: "https://github.com/MMoyanoFontana/fbref-scrapy",
            demo: ""
        },
        {
            id: 4,
            titulo: "Portafolio Personal",
            descripcion: "El portfolio donde estas ahora mismo. Desarrollado con React y TypeScript, diseñado con Tailwind CSS. Incluye secciones interactivas, navegación fluida y diseño responsive",
            tecnologias: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML", "CSS"],
            imagen: PortfolioImg,
            github: "https://github.com/MMoyanoFontana/MMoyanoFontana.github.io",
            demo: ""
        },
    ];

    return (
        <section id="proyectos" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Mis Proyectos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Estos son algunos de los proyectos en los que he trabajado o estoy trabajando. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="relative">
                                <img 
                                    src={proyecto.imagen} 
                                    alt={proyecto.titulo}
                                    className="w-full h-48 object-contain object-center"
                                />
                            </div>
                            
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {proyecto.titulo}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                                    {proyecto.descripcion}
                                </p>
                                
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {proyecto.tecnologias.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <a
                                        href={proyecto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        GitHub
                                    </a>
                                    {proyecto.demo && (
                                        <a
                                            href={proyecto.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-900 transition-colors duration-200"
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            
            </div>
        </section>
    )
}

export default Proyectos;