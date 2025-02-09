import '../styles/Pages.css'
import { MotionDivWrapper } from "../components/MotionDivWrapper"

function Resume({ globalHidden }) {
    const LinkToRedbubble = () => {
        window.open('https://www.redbubble.com/people/akrem05/shop?asc=u', '_blank');
    }
    const LinkToSolana = () => {
        window.open(process.env.REACT_APP_SOLANA_LINK, "_blank");
    }
    return (
        <div className={globalHidden ? 'hide' : ''}>
            <MotionDivWrapper Class={'pages'}>
                <div className='title-container'>
                    <h1 className='pages-title'>Resume</h1>
                    <a
                        className='download-resume'
                        href="https://drive.google.com/file/d/1ViQw6CtG8FskZZFT2p3jiJf3xqDzQIrc/view?usp=sharing"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download
                    </a>
                </div>

                <div className="pages-section">
                    <div className="left-part-container">
                        <h2>Work <br /> Experience</h2>
                    </div>
                    <div className='right-part-container'>
                        <div className='right-part'>
                            <p>Nov 2023 – Present</p>
                            <div className="det">
                                <h3>Web Developer and Tourism Agent</h3>
                                <ul>
                                    <li>Created <span onClick={LinkToSolana}>solanatravel.com</span>, a responsive landing page to enhance user engagement.</li>
                                    <li>Utilized HTML5, CSS3, JavaScript, NodeJS, totaling around 6400 lines.</li>
                                    <li>Designed visuals and layouts using Adobe Illustrator.</li>
                                    <li>Deployed on DigitalOcean, enhanced performance with CloudFlare CDN.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='right-part'>
                            <p>Mar 2023 – Mar 2023</p>
                            <div className="det">
                                <h3>Social Media Advertising</h3>
                                <ul>
                                    <li>Managed Facebook and Instagram advertising campaigns for multiple clients since early 2023, achieving successful outcomes and generating financial returns.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='right-part'>
                            <p>Mar 2022 – Mar 2023</p>
                            <div className="det">
                                <h3>Graphic designer</h3>
                                <ul>
                                    <li>Designed social media posters and print-on-demand products using Adobe Illustrator,
                                        enhancing brand visibility and supporting marketing efforts without financial compensation. You can view the designs <span onClick={LinkToRedbubble}>here</span>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='right-part'>
                            <p>Jan 2022 – Mar 2022</p>
                            <div className="det">
                                <h3>TRAINING CENTER LEADER </h3>
                                <ul>
                                    <li>Coordinated and managed training programs in hairdressing, graphic design, and photography, handling trainer recruitment and candidate sourcing.</li>
                                    <li>Gained valuable skills applicable to the IT domain, including project coordination, team management, resource allocation, and stakeholder communication.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <h2>Education</h2>
                    <div className="right-part-container">
                        <div className="right-part">
                            <p>2018 - 2021</p>
                            <div className="det">
                                <h3>BACHELOR&apos;S DEGREE </h3>
                                <ul>
                                    <li>Information technology bachelor&apos;s degree in Faculty of Sciences M'hamed Bougara Boumerdes University</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-part">
                            <p>2015 - 2018</p>
                            <div className="det">
                                <h3>HIGH SCHOOL DIPLOMA  </h3>
                                <ul>
                                    <li>Kasdi Merbah high school Bordj El Bahri Algiers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <h2>Languages</h2>
                    <div className="right-part-container">
                        <div className="right-part">
                            <p></p>
                            <div className="det">
                                <ul>
                                    <li>Arabic: Native</li>
                                    <li>English: 6.0 (Ielts 28 Sep 2024)</li>
                                    <li>French: B1 (TCF 2021)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages-line"></div>
                <div className="pages-section">
                    <h2>Skills</h2>
                    <div className="right-part-container">
                        <div className="right-part">
                            <p></p>
                            <div className="det">
                                <h3>Programming Languages</h3>
                                <ul>
                                    <li>intermidiate: Javascript(1yrs)</li>
                                    <li>Beginner: SQL (1yrs), NodeJS (1yrs), ReactJS (less 1yrs).</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-part">
                            <p></p>
                            <div className="det">
                                <h3>Software</h3>
                                <ul>
                                    <li>Git, Bootstrap, Firebase, Adobe Illustrator, Postman, DigitalOcean, Cloudflare.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionDivWrapper>
        </div>
    )
}

export default Resume;