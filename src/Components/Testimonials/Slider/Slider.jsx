import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import quoteIcon from '../../Images/quoteIcon.png';
// import profileImage from '../../Images/profile_icon_demo.jpg';
import Amina from '../../Images/Alima.png';
import AlexCorp from '../../Images/Alexcorp.png';
import Elevate from '../../Images/Elevate.png';
import Nexa from '../../Images/Nexa.png';
import SoftEdge from '../../Images/softedge.png';

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
      text: "The free prototype we received from INX Digitals as part of their GVL package for SMEs was a game-changer. It gave NovaCrate a polished and professional brand representation that really connected with our audience. It instantly boosted our credibility and directly led to increased sales. We're incredibly grateful!",
      profileImage: Amina,
      name: "Amina Yusuf",
      position: "Founder of NovaCrate.",
    },
    {
      quoteIcon: quoteIcon,
      text: "From concept to launch, INX Digitals LTD delivered a top-tier website that perfectly aligns with our brand vision. Their structured approach ensured a smooth design process, and their ongoing maintenance keeps our site optimized and secure. A true game-changer for our online presence!",
      profileImage: AlexCorp,
      name: "Alex Corp",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD provided expert consulting that transformed our digital strategy. Their in-depth market insights, process optimization, and tailored recommendations have significantly improved our efficiency and client engagement. A trusted partner for business growth!",
      profileImage: Elevate,
      name: "Elevate Consulting",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD’s digital marketing strategies helped us expand our reach and drive real engagement. Their data-driven approach, innovative campaigns, and conversion-focused execution delivered outstanding results. The impact on our brand has been phenomenal",
      profileImage: Nexa,
      name: "Nexa Reach",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD turned our app idea into a fully functional and scalable solution. Their technical expertise, user-friendly design, and seamless development process ensured a high-quality product. We couldn’t have asked for a better team to bring our vision to life!",
      profileImage: SoftEdge,
      name: "SoftEdge Solutions",
      // position: "CEO, Facebook",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 2.5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 716 }, items: 1.5 },
    mobile: { breakpoint: { max: 716, min: 0 }, items: 1 },
  };

  return (
    <div className="slider-container">
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000} infinite 
        arrows={false}
        swipeable={true}
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
