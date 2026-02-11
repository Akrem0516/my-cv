import { MotionDivWrapper } from "../components/MotionDivWrapper";
import React, { Suspense } from 'react';
import '../styles/Pages.css'

import project1 from '../assets/project1solanatravel.jpg';
import project2 from '../assets/projet2mycv.jpg';
import project3 from '../assets/project3ghebghoubcv.jpg'
import github from '../assets/github-brands-solid.svg'


import { MotionImgWrapper } from "../components/MotionImgWrapper";


function Projects({ globalHidden }) {
    const linktosolana = process.env.REACT_APP_SOLANA_LINK
    const linktomycv = process.env.REACT_APP_MYCV_LINK
    const linktoghebghoubcv = 'https://ghebghoubcv.vercel.app/'



    function OpenLink(url) {
        window.open(url);
    }
    const LinkToGithubsolana = () => {
        window.open('https://github.com/Akrem0516/solana-website', "_blank")
    }

    const LinkToGithubGhebghoubCv = () => {
        window.open('https://github.com/Akrem0516/ghebghoubcv', "_blank")
    }

    const LinkToGithubMyCv = () => {
        window.open('https://github.com/Akrem0516/my-cv', "_blank")
    }


    return (
        <div className={globalHidden ? 'hide' : ''}>
            <MotionDivWrapper Class={'pages'}>
                <h1 className='pages-title'>Projects</h1>
                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>Solana Travel <br /> <em><small>Landing page</small></em> </h2>
                        <p>Developed a responsive website for Solana Travel, a travel agency based in Algeria. Utilized HTML, CSS, and JavaScript to create a user-friendly interface featuring service descriptions,
                            client testimonials, and contact information. Ensured cross-browser compatibility and optimized performance for various devices.
</p>
                        <img src={github} onClick={LinkToGithubsolana} alt="github-logo" />
                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p></p>
                            <div className="det imagedet">
                                <Suspense fallback={<div>img is Loading...</div>}>
                                    <MotionImgWrapper PicPath={project1} Clicked={OpenLink} url={linktosolana} alt="" />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>My Portfolio <br /> <em><small> Personal Portfolio Website</small></em></h2>
                        <p>A modern and responsive CV landing page designed to present professional information in a clean and structured way.
                            The project focuses on clarity, readability, and a minimalist design to highlight skills, experience, and contact details effectively.
</p>
                        <img src={github} onClick={LinkToGithubMyCv} alt="github-logo" />

                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p></p>
                            <div className="det">
                                <Suspense fallback={<div>img is Loading...</div>}>
                                    <MotionImgWrapper PicPath={project2} Clicked={OpenLink} url={linktomycv} alt="" />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>Abdelmalek Ghebghoub Portfolio <br /> <em><small>Personal Portfolio Website</small></em></h2>
                        <p>Built and deployed a personal portfolio website for Abdelmalek Ghebghoub using modern web development technologies.
                            Designed to showcase professional experience, skills, projects, and contact information in a clean, responsive, and visually engaging format.
                            Implemented interactive navigation, optimized layout for both desktop and mobile devices, and ensured fast performance and accessibility.
                            Delivered a polished online presence that effectively highlights the owner’s background and capabilities to potential employers or clients.
</p>
                        <img src={github} onClick={LinkToGithubGhebghoubCv} alt="github-logo" />
                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p></p>
                            <div className="det">
                                <Suspense fallback={<div>img is Loading...</div>}>
                                    <MotionImgWrapper PicPath={project3} Clicked={OpenLink} url={linktoghebghoubcv} alt="" />
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