import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './Home';
import Projects from './Projects';

import Resume from './Resume';
import Contact from './Contact';
import Notfound from './404';
import Header from "../components/Header";
import Footer from '../components/Footer';
import ParticlesComponent from '../components/Tsparticles';
import '../styles/App.css';


export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [globalHidden, setGlobalHidden] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const linkClicked = () => {
        setMenuOpen(false);
        setGlobalHidden(false);
    };

    return (
        <>
            <Header
                setGlobalHidden={setGlobalHidden}
                globalHidden={globalHidden}
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                linkClicked={linkClicked}
            />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path="/Projects" element={<Projects globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />

                    <Route path="/Resume" element={<Resume globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path="/Contact" element={<Contact globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                    <Route path='*' element={<Notfound globalHidden={globalHidden} toggleGlobalHidden={linkClicked} />} />
                </Routes>
            </AnimatePresence>

            <Footer globalHidden={globalHidden} />

            <ParticlesComponent />
        </>
    );
}
