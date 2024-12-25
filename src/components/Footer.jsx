import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="line"></div>
            <div className="components">
                <div className='component'>
                    <label htmlFor="phone-number" >Phone</label>
                    <span id="phone-number" >+213 549 00 88 80</span>
                </div>
                <div className='component'>
                    <label htmlFor="email" >Email</label>
                    <span id="email" >ouassimakrem@gmail.com</span>
                </div>
                <div className='component'>
                    <label htmlFor="follow-me" >Follow me</label>
                    <span id="follow-me" ></span>
                </div>
                <p className="copyright">Copyright © Mezouri 2024</p>
            </div>
        </footer>
    )
}

export default Footer