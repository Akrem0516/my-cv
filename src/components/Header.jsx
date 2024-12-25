import { Link } from 'react-router-dom'
import '../styles/Header.css'


function Header() {
    return (
        <nav>
            <Link to="/" className='left'>
                <div className='circle'></div>
                <h3 className="name">MEZOURI AKREM OUASSIM</h3>
                <p className="Major">Web Developer</p>
            </Link>
            <ul className='right'>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="Projects">Projects</Link>
                </li>
                <li>
                    <Link to="Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;