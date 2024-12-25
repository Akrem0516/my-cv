import PicPath from '../assets/me.jpg'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


function Home() {
    return (
        <div className='about-me'>
            <motion.img src={PicPath} alt="Portrait of me" className='My-pic'
                initial={{ opacity: 0, scale: 0.8 }} // Image starts small and transparent
                animate={{ opacity: 1, scale: 1 }}   // Fade in and scale to normal
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }} // Delay for smoother effect
            />
            <motion.div className='details'
                initial={{ opacity: 0, y: -70 }} // Content starts below the viewport
                animate={{ opacity: 1, y: 0 }}  // Slides into view
                exit={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h1 className='title'>Hello</h1>
                <div className='sub-details'>
                    <h2 className='subtitle'>A bit about me</h2>
                    <p className='text'>I am a web developer specializing in creating responsive, high-performance websites.
                        I focus on delivering user-friendly designs and optimized solutions to meet diverse needs, with a passion for turning ideas into impactful digital experiences.</p>
                </div>
                <div className='links'>
                    <Link to="/Resume">Resume</Link>
                    <Link to="Projects">Projects</Link>
                    <Link to="Contact">Contact</Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Home;