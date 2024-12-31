
import { useState } from 'react';
import '../styles/Hamburger.css'

export function Hamburger({ onClick, setGlobalHidden, globalHidden }) {
    const [isActive, setIsActive] = useState(false);

    const hamburgerClicked = () => {
        onClick();
        setGlobalHidden(!globalHidden);
        setIsActive(!isActive)
    }
    return (
        <button className={`hamburger ${isActive ? 'active' : ''}`} onClick={hamburgerClicked} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}