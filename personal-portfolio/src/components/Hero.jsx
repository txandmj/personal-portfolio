import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{portfolioData.personal.title}</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                    {portfolioData.personal.description}
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img 
                    src={portfolioData.personal.photo} 
                    alt={portfolioData.personal.name} 
                    className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover" 
                />
            </div>
        </section>
    );
};

export default Hero;
