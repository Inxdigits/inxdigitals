import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import quoteIcon from '../../Images/quoteIcon.png';
import profileImage from '../../Images/model-pp.png';

// Card Component
const TestimonialCard = ({ quoteIcon, text, profileImage, name, position }) => {
  return (
    <div className="testimonial-card">
      {/* Quote Icon */}
      <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />

      {/* Testimonial Text */}
      <p className="testimonial-text">{text}</p>

      {/* Profile Info */}
      <div className="profile-section">
        <img src={profileImage} alt={name} className="profile-image" />
        <div>
          <h4 className="profile-name">{name}</h4>
          <p className="profile-position">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  // Array of testimonials
  const testimonials = [
    {
      quoteIcon: quoteIcon,
      text: "In a fast-paced digital landscape, businesses need more than just technology—they need the right strategies, tools, and expertise to thrive. At INX Digital Innovation, we are not just a tech.",
      profileImage: profileImage,
      name: "Mark Zuckerberg",
      position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "In a fast-paced digital landscape, businesses need more than just technology—they need the right strategies, tools, and expertise to thrive. At INX Digital Innovation, we are not just a tech.",
      profileImage: profileImage,
      name: "Mark Zuckerberg",
      position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "In a fast-paced digital landscape, businesses need more than just technology—they need the right strategies, tools, and expertise to thrive. At INX Digital Innovation, we are not just a tech.",
      profileImage: profileImage,
      name: "Mark Zuckerberg",
      position: "CEO, Facebook",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 2.5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1.5 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="slider-container">
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000} infinite 
        arrows={false}
        swipeable={false}
        draggable={false}
        >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider
