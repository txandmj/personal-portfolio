import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-4 text-center">
                <p>&copy; 2024 {portfolioData.personal.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
