import { useState } from 'react';
import TechCard from './TechCard';

{/* Fuentes
    https://icons8.com/
    https://www.svgrepo.com
    https://www.streamlinehq.com/
*/}
import awsIcon from '../assets/aws-svgrepo-com.svg';
import dockerIcon from '../assets/Docker--Streamline-Svg-Logos.svg';
import djangoIcon from '../assets/django-svgrepo-com.svg';
import fastApiIcon from '../assets/fastapi-svgrepo-com.svg';
import githubActionsIcon from '../assets/Github-Actions--Streamline-Svg-Logos.svg';
import javaIcon from '../assets/java-svgrepo-com.svg';
import jsIcon from '../assets/js-svgrepo-com.svg';
import langChainIcon from '../assets/Langchain--Streamline-Simple-Icons.svg';
import langGraphIcon from '../assets/langgraph-color.svg';
import matplotlibIcon from '../assets/matplotlib-icons8.svg';
import numpyIcon from '../assets/numpy-svgrepo-com.svg';
import pandasIcon from '../assets/pandas-icons8.svg';
import postgresIcon from '../assets/postgresql-svgrepo-com.svg';
import powerBIIcon from '../assets/power-bi-2021-icons8.svg';
import pythonIcon from '../assets/python-svgrepo-com.svg';
import pytorchIcon from '../assets/pytorch-svgrepo-com.svg';
import reactIcon from '../assets/react-javascript-js-framework-facebook-svgrepo-com.svg';
import redisIcon from '../assets/redis-svgrepo-com.svg';
import scikitLearnIcon from '../assets/Scikit_learn_logo_small.svg';
import seabornIcon from '../assets/Seaborn-Icon--Streamline-Svg-Logos.svg';
import tailwindIcon from '../assets/tailwind-svgrepo-com.svg'
import tensorFlowIcon from '../assets/tensorflow-svgrepo-com.svg';
import tsIcon from '../assets/typescript-icon-svgrepo-com.svg'

const Stack = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const techStacks = [
        {
            id: 'backend',
            category: "Backend",
            technologies: [
                { name: "Python", icon: pythonIcon },
                { name: "FastAPI", icon: fastApiIcon },
                { name: "Django", icon: djangoIcon },
                { name: "Java", icon: javaIcon },
                { name: "PostgreSQL", icon: postgresIcon },
                { name: "Redis", icon: redisIcon },
            ]
        },
        {
            id: 'infra',
            category: "Infraestructura y CI/CD",
            technologies: [
                { name: "AWS", icon: awsIcon },
                { name: "Docker", icon: dockerIcon },
                { name: "GitHub Actions", icon: githubActionsIcon }
            ]
        },
        {
            id: 'ai',
            category: "AI & ML",
            technologies: [
                { name: "TensorFlow", icon: tensorFlowIcon },
                { name: "PyTorch", icon: pytorchIcon },
                { name: "Scikit-learn", icon: scikitLearnIcon },
                { name: "LangChain ", icon: langChainIcon },
                { name: "LangGraph", icon: langGraphIcon },
            ]
        },
        {
            id: 'data',
            category: "Data",
            technologies: [
                { name: "Power BI", icon: powerBIIcon },
                { name: "Pandas", icon: pandasIcon },
                { name: "NumPy", icon: numpyIcon },
                { name: "Matplotlib", icon: matplotlibIcon },
                { name: "Seaborn", icon: seabornIcon },
            ]
        },
        {
            id: 'frontend',
            category: "Frontend",
            technologies: [
                { name: "React", icon: reactIcon },
                { name: "Tailwind CSS", icon: tailwindIcon },
                { name: "JavaScript", icon: jsIcon },
                { name: "TypeScript", icon: tsIcon },
            ]
        }
    ];

    const getFilteredStacks = () => {
        if (activeCategory === 'all') {
            return techStacks;
        }
        const stack = techStacks.find(s => s.id === activeCategory);
        return stack ? [stack] : [];
    };

    const categories = [
        { id: 'all', name: 'Todas' },
        { id: 'backend', name: 'Backend' },
        { id: 'ai', name: 'AI y ML' },
        { id: 'data', name: 'Data' },
        { id: 'infra', name: 'Infraestructura y CI/CD' },
        { id: 'frontend', name: 'Frontend' }
    ];

    return (
        <section id="tecnologías" className="bg-white">
            <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Stack Tecnológico
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-10">
                        Estas son las tecnologías que manejo y más me apasionan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium ${activeCategory === category.id
                                    ? 'bg-gray-900 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-12">
                    {getFilteredStacks().map((stack) => (
                        <div key={stack.id} className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                {stack.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {stack.technologies.map((tech) => (
                                    <TechCard
                                        key={tech.name}
                                        name={tech.name}
                                        icon={tech.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack;