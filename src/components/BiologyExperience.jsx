import React from 'react';
import Icon from './Icons';
import { portfolioData } from '../data/portfolioData';

const BiologyExperience = () => {
    return (
        <section id="biology" className="py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Biology Experience</h2>
            
            <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
                    <Icon name="book-open" className="w-6 h-6 mr-2 text-indigo-600" />
                    Publications
                </h3>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {portfolioData.publications.map((pub, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-bold text-lg text-gray-900">{pub.title}</h4>
                            <p className="text-gray-600 italic">{pub.authors} ({pub.year}). {pub.journal}.</p>
                            <a href={pub.link} className="text-indigo-600 hover:underline mt-2 inline-block">Read Publication &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
                    <Icon name="flask-conical" className="w-6 h-6 mr-2 text-indigo-600" />
                    Key Techniques
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {portfolioData.techniques.map((technique, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                            <Icon name={technique.icon} className="w-10 h-10 mx-auto mb-2 text-indigo-500" />
                            <p className="font-semibold">{technique.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BiologyExperience;

