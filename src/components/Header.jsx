import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { Hamburger } from './Hamburger';
import { useState } from 'react';

function Header({ setGlobalHidden }) {
    // Correctly destructure useState
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

    };

    return (
        <nav>
            <Link to="/" className="left">
                <div className="circle"></div>
                <h3 className="name">MAO .</h3>
            </Link>
            <div className="right">
                {/* Pass toggleMenu to Hamburger */}
                <Hamburger onClick={toggleMenu} />
                {/* Dynamically apply 'open' class */}
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <Link to="/Resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
