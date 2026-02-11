
import '../../styles/Projects.css'


function Project1() {
    return (
        <div className="project-details">
            <h1>Solana Travel</h1>
            <p>
                Solana Travel is a responsive landing page developed for a travel agency
                based in Algeria. The project focuses on presenting services, customer
                reviews, and contact information in a clean and accessible layout.
            </p>

            <h3>Features</h3>
            <ul>
                <li>Responsive design (mobile, tablet, desktop)</li>
                <li>Service showcase sections</li>
                <li>Customer testimonials</li>
                <li>Optimized performance</li>
            </ul>

            <h3>Technologies</h3>
            <p>HTML, CSS, JavaScript, React</p>

            <a href={process.env.REACT_APP_SOLANA_LINK} target="_blank" rel="noreferrer">
                Live Demo
            </a>
        </div>
    );
}

export default Project1;
