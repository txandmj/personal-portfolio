import React from 'react';
import Icon from './Icons';
import { portfolioData } from '../data/portfolioData';

const SoftwareEngineering = () => {
    return (
        <section id="software" className="py-20 bg-white -mx-6 px-6 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Software Engineering</h2>
            
            <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
                    <Icon name="code" className="w-6 h-6 mr-2 text-indigo-600" />
                    Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h4>
                                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-indigo-600 font-semibold hover:underline">View on GitHub &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
                    <Icon name="cpu" className="w-6 h-6 mr-2 text-indigo-600" />
                    Skills
                </h3>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {portfolioData.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg">{skill}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftwareEngineering;
