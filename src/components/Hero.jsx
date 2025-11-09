import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const resumes = Array.isArray(portfolioData.personal.resume)
        ? portfolioData.personal.resume
        : portfolioData.personal.resume
            ? [portfolioData.personal.resume]
            : [];

    const resolveHref = (link) => {
        if (!link) return '';
        return link.startsWith('http')
            ? link
            : `${process.env.PUBLIC_URL}${link.startsWith('/') ? '' : '/'}${link}`;
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{portfolioData.personal.title}</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                    {portfolioData.personal.description}
                </p>
                {resumes.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {resumes.map((resume) => {
                            const href = resolveHref(resume.link);
                            if (!href) return null;
                            return (
                                <a
                                    key={resume.label || resume.link}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                    download
                                >
                                    {resume.label || 'Download Resume'}
                                </a>
                            );
                        })}
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
