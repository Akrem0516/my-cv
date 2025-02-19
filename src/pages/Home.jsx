import PicPath from '../assets/me.jpg'
import '../styles/Home.css'
import { MotionDivWrapper } from "../components/MotionDivWrapper"
import { MotionImgWrapper } from "../components/MotionImgWrapper"


function Home({ globalHidden }) {
    
    const linkedinprofile = process.env.REACT_APP_LINKEDIN_LINK;

    function OpenLink(url) {
        window.open(url);
    }

    return (
        <div className={`about-me ${globalHidden ? 'hide' : ''}`}>
            <div>
                <MotionImgWrapper PicPath={PicPath} Alt={"Linkedin link"} Class={'My-pic'} Clicked={OpenLink} url={linkedinprofile} />
            </div>
            <MotionDivWrapper Class={'details'}>
                <h2 className='home-title'>Mezouri Akrem Ouassim .</h2>
                <div className='sub-details'>
                    <h2 className='subtitle'>A bit about me</h2>
                    <p className='home-text'>I am a web developer specializing in creating responsive, high-performance websites.
                        I focus on delivering user-friendly designs and optimized solutions to meet diverse needs, with a passion for turning ideas into impactful digital experiences.</p>
                </div>
            </MotionDivWrapper>
        </div>
    )
}

export default Home;