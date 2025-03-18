import React from 'react'
import '../Testimonials/Testimonials.css'
import Slider from './Slider/Slider'

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <h3 style={{fontWeight: "700", fontSize: "32px", textAlign: 'center'}}>
        HEAR WHAT OUR <span style={{color: "rgba(246, 85, 13, 1)"}}>SATISFIED</span> CLIENTS HAVE TO SAY
      </h3>
      <div className="number-of-reviews">
        <p style={{fontWeight: "700", fontSize: "40px"}}>100+</p>
        <p style={{fontWeight: "400", fontSize: "16px"}}>REVIEWS</p>
      </div>
      <Slider />
    </div>
  )
}

export default Testimonials
