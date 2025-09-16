import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Header,
    Home,
    BiologyPage,
    ComputerSciencePage,
    Footer
} from './components';

function App() {
    return (
        <Router>
            <div id="top" className="bg-gray-50 text-gray-700 font-sans">
                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/biology" element={<BiologyPage />} />
                    <Route path="/cs" element={<ComputerSciencePage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;

