import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icons';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
    const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">{portfolioData.personal.name}</Link>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link 
                        to="/" 
                        className={`transition duration-300 ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/biology" 
                        className={`transition duration-300 ${isActive('/biology') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                        Biology Experience
                    </Link>
                    <Link 
                        to="/cs" 
                        className={`transition duration-300 ${isActive('/cs') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                        Software Engineering
                    </Link>
                    <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Contact</a>
                </div>
                <button onClick={toggleMenu} className="md:hidden">
                    <Icon name="menu" className="w-6 h-6" />
                </button>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <Link to="/" onClick={closeMenu} className={`block py-2 ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>Home</Link>
                    <Link to="/biology" onClick={closeMenu} className={`block py-2 ${isActive('/biology') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>Biology Experience</Link>
                    <Link to="/cs" onClick={closeMenu} className={`block py-2 ${isActive('/cs') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>Software Engineering</Link>
                    <a href="#contact" onClick={closeMenu} className="block py-2 mt-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
