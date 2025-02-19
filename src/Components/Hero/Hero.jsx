import React from 'react'
import './Hero.css'
import Hero_gradient from '../Hero_gradient/Hero_gradient.jsx'

const Hero = () => {
  return (
    <div className='Hero container' id='home'>
      <div className="Hero-text">
        <h1>Designing the<span style={{ color: '#F6550D' }}> Digital Future</span >,<br/>One <span style={{color:'#F6550D'}}>Solution</span> at a time.</h1>
        <p>At INX Digitals, we transform ideas into impactful realities. From bespoke websites to groundbreaking apps, bold branding, and seamless IT solutions, we craft experiences that inspire, connect, and deliver results.</p>
      </div>
      <Hero_gradient />
    </div>
  )   
}

export default Hero