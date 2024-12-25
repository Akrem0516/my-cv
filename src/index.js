import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from "./components/Header";
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ParticlesComponent from './components/Tsparticles';
import Footer from './components/Footer';
import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Resume" element={<Resume />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer />
      <ParticlesComponent />
    </Router>
    
  </React.StrictMode>
);
