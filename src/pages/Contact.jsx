import '../styles/Pages.css'
import { MotionDivWrapper } from "../components/MotionDivWrapper";
import Form from '../components/Form'


function Contact({ globalHidden }) {
    return (
        <div className={globalHidden ? 'hide' : ''}>
            <MotionDivWrapper Class={'pages'} >
                <div className='page-top'>
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
        </div>
    )
}

export default Contact;