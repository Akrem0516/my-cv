
import '../styles/Hamburger.css'

export function Hamburger({ onClick, setGlobalHidden, globalHidden }) {

    const hamburgerClicked = () => {
        onClick();
        setGlobalHidden(!globalHidden);
    }
    return (
        <button className={`hamburger ${globalHidden ? 'active' : ''}`} onClick={hamburgerClicked} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}