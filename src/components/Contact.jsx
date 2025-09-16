import React from 'react';
import Icon from './Icons';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
                I'm always open to discussing new projects, research collaborations, or opportunities. Feel free to reach out!
            </p>
            <div className="flex justify-center items-center space-x-6">
                {portfolioData.social.map((social, index) => (
                    <a 
                        key={index}
                        href={social.link} 
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    >
                        <Icon name={social.name} className="w-8 h-8" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;

