import PicPath from '../assets/My-pic.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='about-me'>
            <img src={PicPath} alt="" className='My-pic' />
            <div className='details'>
                <h1 className='title'>Hello</h1>
                <h2 className='subtitle'>A bit about me</h2>
                <p className='text'>I am a web developer specializing in creating responsive, high-performance websites. 
                    I focus on delivering user-friendly designs and optimized solutions to meet diverse needs, with a passion for turning ideas into impactful digital experiences.</p>
            </div>
        </div>
    )
}

export default Home;