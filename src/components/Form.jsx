import { useState } from 'react';
import '../styles/Form.css';

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError("Invalid email format.");
            return;
        } else {
            setError("");
        }

        try {
            const response = await fetch(process.env.REACT_APP_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='fg'>
                <div className='form-item'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className='form-item'>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} required />
                </div>
            </div>
            <div className='fg'>
                <div className='form-item'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' value={formData.email} onChange={handleChange} required />
                    {error && <p className="error">{error}</p>}
                </div>
                <div className='form-item'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' value={formData.subject} onChange={handleChange} required />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
