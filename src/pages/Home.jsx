import PicPath from '../assets/me.jpg'
import '../styles/Home.css'
import { motion } from "framer-motion";
import { MotionDivWrapper } from "../components/MotionDivWrapper"


function Home() {
    // todo: use MotionImgWrapper instead of motion.img
    return (
        <div className='about-me'>
            <motion.img src={PicPath} alt="Portrait of me" className='My-pic'
                initial={{ opacity: 0, scale: 0.8 }} // Image starts small and transparent
                animate={{ opacity: 1, scale: 1 }}   // Fade in and scale to normal
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }} // Delay for smoother effect
            />

            <MotionDivWrapper>
                <h2 className='title'>Mezouri Akrem Ouassim .</h2>
                <div className='sub-details'>
                    <h2 className='subtitle'>A bit about me</h2>
                    <p className='text'>I am a web developer specializing in creating responsive, high-performance websites.
                        I focus on delivering user-friendly designs and optimized solutions to meet diverse needs, with a passion for turning ideas into impactful digital experiences.</p>
                </div>
            </MotionDivWrapper>
        </div>
    )
}

export default Home;