
import '../styles/Form.css'

function Form() {
    return (
        <form action="">
            <div className='fg'>
                <div className='form-item'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name='first-name' required />
                </div>
                <div className='form-item'>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name='last-name' required />
                </div>
            </div>
            <div className='fg'>
                <div className='form-item'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' required />
                </div>
                <div className='form-item'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' required />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required></textarea>
            </div>
            <div></div>
            <button>Submit</button>
        </form>
    )
}

export default Form;