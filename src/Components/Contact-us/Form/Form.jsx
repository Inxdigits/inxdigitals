import React, { useState } from 'react'
import '../Form/Form.css'

const Form = () => {    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        selectedService: '', // Holds the value of the selected radio button
        message: '',
    });

    const services = [
        'Website & App Design',
        'Website & App Development',
        'Digital Marketing',
        'Brand Strategy & Creative Services',
        'IT Consulting & Digital Transformation',
        'Product Prototyping & MVP Development',
    ];

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle Radio Button change
    const handleRadioChange = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            selectedService: value,
        }));
    };
    
    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form action="" 
            method='post'
            onSubmit={ handleSubmit }
            className='form-container' 
            style={{maxWidth: '750px', margin: '0 auto'}}>
                <div className="name-input">
                    <div className="input-container firstname-input">
                        <label>
                        First Name
                        </label>
                        <input
                            className='firstname input'
                            type="text"
                            name="firstName"
                            placeholder='John Doe'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-container lastname-input">
                        <label>
                        Last Name
                        </label>
                        <input
                            className='lastname input'
                            type="text"
                            name="lastName"
                            placeholder='John Doe'
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-container email-input">
                    <label>
                    Work Email
                    <input
                        className='email input'
                        type="text"
                        name="email"
                        placeholder="jane@facebook.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{width: "100%"}}
                    />
                    </label>
                </div>
                <div className="input-container number-input">
                    <label>
                    Phone Number
                    <input
                        className='phone '
                        type="tel"
                        name="phone"
                        placeholder="9202-930-250"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{width: "100%"}}
                    />
                    </label>
                </div>

                <div className="radio-field">
                    <p>What service are you interested in?</p>
                    <div className="radio-container">
                        <div className="radio-column">
                            {services.slice(0, 3).map((service, index) => (
                                <label className="custom-radio" key={index}>
                                    <input
                                    type="radio"
                                    name="service"
                                    value={service}
                                    checked={formData.selectedService === service}
                                    onChange={() => handleRadioChange(service)}
                                    />
                                    <span className="checkmark"></span>
                                    {service}
                                </label>
                            ))}
                        </div>
                        <div className="radio-column">
                            {services.slice(3).map((service, index) => (
                                <label className="custom-radio" key={index + 3}>
                                    <input
                                    type="radio"
                                    name="service"
                                    value={service}
                                    checked={formData.selectedService === service}
                                    onChange={() => handleRadioChange(service)}
                                    />
                                    <span className="checkmark"></span>
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="message-input">
                        <label>
                            Message
                            <textarea
                                className="message input"
                                name="message"
                                placeholder="Is there anything particular you need help with?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <div className="send-button">
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </div>
                </div>


        </form>
    )
}

export default Form
