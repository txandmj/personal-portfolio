import React from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import Contact from './Contact';

const Home = () => {
    return (
        <main className="container mx-auto px-6 py-16">
            <Hero />
            <Navigation />
            <Contact />
        </main>
    );
};

export default Home;
