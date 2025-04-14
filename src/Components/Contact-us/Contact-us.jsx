import React from 'react'
import '../Contact-us/Contact-us.css'
import whatsapp from '../Images/ri_whatsapp-fill.png';
import phone from '../Images/material-symbols_call.png';
import email from '../Images/ic_baseline-email.png'
import Form from './Form/Form';


const ContactUs = () => {
  return (
    <div className="contact-container" id='contact'>
        <div className='contact-intro'>
            <h3 style={{fontWeight: "700", fontSize: "32px"}}>CONTACT US</h3>
            <p style={{fontWeight: "400", fontSize: "16px"}}>Ready to help your business scale faster? Let's talk about how we can help.</p>    
        </div>
        <div className="contact-modes">
            <div className="call contact-card">
                <img className='card-icon' src={phone} alt="" />
                <h4>Call Us</h4>
                <p>Mon-Fri from 8am to 6pm</p>
                <div className="number">
                    <a className="link-format" href="tel:+2349022778028">
                        <p className='contact-link'>+234 (9022)778 028</p> 
                    </a>
                </div>
            </div>
            <div className=" contact-card">
                <img className='card-icon' src={whatsapp} alt="" />
                <h4>Chat Us</h4>
                <p>Send us a Whatsapp message</p>
                <div className="message">
                    <a className="link-format" href="https://wa.me/message/JS6AFFUXKOPLK1">
                        <p className='contact-link'>Send a message</p>
                    </a>
                </div>
            </div>
            <div className="email contact-card">
                <img className='card-icon' src={email} alt="" />
                <h4>Email Us</h4>
                <p>We are here to help</p>
                <div className="number">
                    <a className="link-format" href="mailto:info@inxdigitals.com">
                        <p className='contact-link'>info@inxdigitals.com</p>
                    </a>
                </div>
            </div>
        </div>
        <div className="form-field" id='form-container'>
            <h4 style={{fontWeight: "600px", fontSize: "20px", lineHeight : "30px"}}>
                Send us a message
            </h4>
            <p>
                We'll get back to you within 24 hours
            </p>
            <Form />
        </div>
    </div>
  )
}

export default ContactUs
