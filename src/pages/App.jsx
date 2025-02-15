import Home from './Home';
import Header from "../components/Header";
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import ParticlesComponent from '../components/Tsparticles';
import Footer from '../components/Footer';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../styles/App.css';
import { useState } from 'react';
import Notfound from './404';

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [globalHidden, setGlobalHidden] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const linkClicked = () => {
        setMenuOpen(false); // Close the menu
        setGlobalHidden(false); // Reset the globalHidden state 
    };

    const AnimatedRoutes = () => {
        const location = useLocation();
        return (
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path="/Projects" element={<Projects globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path="/Resume" element={<Resume globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path="/Contact" element={<Contact globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </AnimatePresence>
        );
    };

    return (
        <Router>
            <Header
                setGlobalHidden={setGlobalHidden}
                globalHidden={globalHidden}
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                linkClicked={linkClicked}
            />
            <AnimatedRoutes />
            <Footer globalHidden={globalHidden} />
            <ParticlesComponent />
        </Router>
    );
}
