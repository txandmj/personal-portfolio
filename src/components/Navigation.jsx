import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icons';

const Navigation = () => {
    return (
        <section className="py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Explore My Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Biology Experience Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <Icon name="flask-conical" className="w-8 h-8 mr-3 text-indigo-600" />
                            <h3 className="text-2xl font-bold text-gray-800">Biology Experience</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Research publications, laboratory techniques, and scientific expertise in molecular biology and cell biology.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-500">
                                <Icon name="book-open" className="w-4 h-4 mr-4 text-indigo-500" />
                                <span>12 Publications</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Icon name="microscope" className="w-4 h-4 mr-4 text-indigo-500" />
                                <span>15 Key Techniques</span>
                            </div>
                        </div>
                        <Link 
                            to="/biology" 
                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300"
                        >
                            Explore Biology Experience
                            <Icon name="code" className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Software Engineering Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <Icon name="cpu" className="w-8 h-8 mr-3 text-indigo-600" />
                            <h3 className="text-2xl font-bold text-gray-800">Software Engineering</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Full-stack development projects, programming skills, and technology expertise for building innovative solutions.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-500">
                                <Icon name="code" className="w-4 h-4 mr-4 text-indigo-500" />
                                <span>2 Projects</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Icon name="cpu" className="w-4 h-4 mr-4 text-indigo-500" />
                                <span>21 Skills</span>
                            </div>
                        </div>
                        <Link 
                            to="/cs" 
                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300"
                        >
                            Explore Software Projects
                            <Icon name="code" className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;

