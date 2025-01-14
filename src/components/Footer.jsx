import '../styles/Footer.css'
import github from '../assets/github-brands-solid.svg'
import linkedin from '../assets/linkedin-brands-solid.svg'

function Footer({ globalHidden }) {
    const LinkToGithub = () => {
        window.open('https://github.com/Akrem0516', "_blank")
    }
    const LinkToLinkedin = () => {
        window.open('https://www.linkedin.com/in/akrem-mezouri', '_blank');
    }
    return (
        <footer className={globalHidden ? 'hide' : ''}>
            <div className="line"></div>
            <div className="components">
                <div className='component'>
                    <label htmlFor="phone-number" >Phone</label>
                    <span id="phone-number" >+213 777 79 21 57</span>
                </div>
                <div className='component'>
                    <label htmlFor="email" >Email</label>
                    <span id="email" >ouassimakrem@gmail.com</span>
                </div>
                <div className='component'>
                    <label htmlFor="follow-me" >Follow me</label>
                    <span id="follow-me" >
                        <img src={github} onClick={LinkToGithub} alt="github-logo" />
                        <img src={linkedin} onClick={LinkToLinkedin} alt="linkedin-logo" />
                    </span>
                </div>
                <p className="copyright">Copyright © Mezouri 2024</p>
            </div>
        </footer>
    )
}

export default Footer