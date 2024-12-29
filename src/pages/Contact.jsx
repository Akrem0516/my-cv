import '../styles/Pages.css'
import { MotionDivWrapper } from "../components/MotionDivWrapper";
import Form from '../components/Form'


function Contact() {
    return (
        <MotionDivWrapper Class={'pages'}>
            <div>
                <h1 className='pages-title'>Contact</h1>
                <h3>Looking forward to hearing from you</h3>
            </div>
            <div className="pages-section">
                <div className="left-part-container">
                    <h2>Email</h2>
                    <p>ouassimakrem@gmail.com</p>
                </div>
                <div className='right-part-container'>
                    <div className='right-part'>
                        <Form></Form>
                    </div>
                </div>
            </div>
        </MotionDivWrapper>
    )
}

export default Contact;