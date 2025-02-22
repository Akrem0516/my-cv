import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { Hamburger } from './Hamburger';

function Header({ setGlobalHidden, globalHidden, toggleMenu, menuOpen, linkClicked }) {
    const location = useLocation();

    const handleLogoClick = (event) => {
        if (location.pathname === '/') {
            event.preventDefault(); // Prevent React Router navigation
            window.location.reload(); // Force reload
        }
    };
    return (
        <nav>
            <Link to="/" className={`left ${globalHidden ? 'hide' : ''}`} onClick={handleLogoClick}>
                <div className="circle"></div>
                <h3 className="name">MAO .</h3>
            </Link>
            <div className="right">
                <Hamburger onClick={toggleMenu} setGlobalHidden={setGlobalHidden} globalHidden={globalHidden} />
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <Link to="/Resume" onClick={linkClicked}>Resume</Link>
                    </li>
                    <li>
                        <Link to="/Projects" onClick={linkClicked}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/Contact" onClick={linkClicked}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
