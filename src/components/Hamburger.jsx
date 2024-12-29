
import '../styles/Hamburger.css'

export function Hamburger({ onClick }) {

    return (
        <button className="hamburger" onClick={onClick} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}