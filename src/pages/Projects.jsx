import { MotionDivWrapper } from "../components/MotionDivWrapper";
import React, { Suspense } from 'react';
import '../styles/Pages.css'

import project1 from '../assets/projet2liaclothes.jpg';
import project2 from '../assets/project1solanatravel.jpg';


function Projects({ globalHidden }) {
    const linktoliaclothes = () => {
        window.open('https://liaclothes.com/');
    }
    const linktosolana = () => {
        window.open('https://solanatravel.com/');
    }

    return (
        <div className={globalHidden ? 'hide' : ''}>
            <MotionDivWrapper Class={'pages'}>
                <h1 className='pages-title'>Projects</h1>
                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>Solana Travel <br /> <em><small>Landing page</small></em> </h2>
                        <p>Developed a responsive website for Solana Travel, a travel agency based in Algeria. Utilized HTML, CSS, and JavaScript to create a user-friendly interface featuring service descriptions,
                            client testimonials, and contact information. Ensured cross-browser compatibility and optimized performance for various devices.</p>
                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p></p>
                            <div className="det">
                                <Suspense fallback={<div>img is Loading...</div>}>
                                    <img src={project1} onClick={linktosolana} alt="" />
                                </Suspense>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>Lia clothes <br /> <em><small>E-commerce website</small></em></h2>
                        <p>Built and customized an e-commerce website for LiaClothes using the YouCan platform. Enhanced functionality with custom JavaScript to improve
                            user experience and interactivity. Delivered a fully responsive and visually appealing design, optimized for seamless navigation and mobile compatibility.</p>
                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p></p>
                            <div className="det">
                                <Suspense fallback={<div>img is Loading...</div>}>
                                    <img src={project2} onClick={linktoliaclothes} alt="" />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionDivWrapper>
        </div>
    )
}

export default Projects;