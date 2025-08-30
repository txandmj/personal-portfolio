import React from 'react';
import { Link } from 'react-router-dom';
import BiologyExperience from './BiologyExperience';
import Icon from './Icons';

const BiologyPage = () => {
    return (
        <main className="container mx-auto px-6 py-16">
            <div className="mb-8">
                <Link 
                    to="/" 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4 transition-colors duration-300"
                >
                    <Icon name="arrow-left" className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Biology Experience</h1>
                <p className="text-lg text-gray-600">Research publications, laboratory techniques, and scientific expertise</p>
            </div>
            <BiologyExperience />
        </main>
    );
};

export default BiologyPage;
