import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const resumeLinkRaw = portfolioData.personal.resume && portfolioData.personal.resume.link;
    const resumeHref = resumeLinkRaw
        ? (resumeLinkRaw.startsWith('http') ? resumeLinkRaw : `${process.env.PUBLIC_URL}${resumeLinkRaw.startsWith('/') ? '' : '/'}${resumeLinkRaw}`)
        : '';
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{portfolioData.personal.title}</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                    {portfolioData.personal.description}
                </p>
                {portfolioData.personal.resume && resumeHref && (
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href={resumeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition duration-300"
                        >
                            View Resume
                        </a>
                        <a
                            href={resumeHref}
                            className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                            download
                        >
                            {portfolioData.personal.resume.label || 'Download Resume'}
                        </a>
                    </div>
                )}
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
