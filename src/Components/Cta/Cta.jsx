import React from 'react';
import './Cta.css';
import inxlogo from "../../assets/Hero.png";

const Cta = () => {
  return (
    <div className='cta-container' >
      <img src={inxlogo} alt="" className='background-image' style={{margin: "0 auto", objectFit: "cover"}}/>
      <div className="overlay">
        <h2 className='text'>GET STARTED AND GROW YOUR BUSINESS TODAY WITH INX DIGITALS</h2>
        <a href="#form-container">
          <button className='button get_started'>Get Started</button>
        </a>
      </div>
    </div>
  )
}

export default Cta
