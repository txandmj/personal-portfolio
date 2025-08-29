import React from 'react';
import {
    Header,
    Hero,
    Navigation,
    BiologyExperience,
    SoftwareEngineering,
    Contact,
    Footer
} from './components';

function App() {
    return (
        <div id="top" className="bg-gray-50 text-gray-700 font-sans">
            <Header />
            
            <main className="container mx-auto px-6 py-16">
                <Hero />
                <Navigation />
                <Contact />
            </main>
            
            {/* Detailed Sections */}
            <BiologyExperience />
            <SoftwareEngineering />

            <Footer />
        </div>
    );
}

export default App;

