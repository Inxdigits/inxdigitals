import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import quoteIcon from '../../Images/quoteIcon.png';
import profileImage from '../../Images/profile_icon_demo.jpg';

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
      text: "INX Digitals LTD transformed our initial prototype into a fully functional and visually compelling website. Their attention to detail, smooth user experience, and efficient upgrade process exceeded our expectations. The transition was seamless, enhancing both performance and aesthetics. Highly recommended!",
      profileImage: profileImage,
      name: "Raphael Ogundare",
      position: "DeVogan World LTD.",
    },
    {
      quoteIcon: quoteIcon,
      text: "From concept to launch, INX Digitals LTD delivered a top-tier website that perfectly aligns with our brand vision. Their structured approach ensured a smooth design process, and their ongoing maintenance keeps our site optimized and secure. A true game-changer for our online presence!",
      profileImage: profileImage,
      name: "Alex Corp",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD provided expert consulting that transformed our digital strategy. Their in-depth market insights, process optimization, and tailored recommendations have significantly improved our efficiency and client engagement. A trusted partner for business growth!",
      profileImage: profileImage,
      name: "Elevate Consulting",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD’s digital marketing strategies helped us expand our reach and drive real engagement. Their data-driven approach, innovative campaigns, and conversion-focused execution delivered outstanding results. The impact on our brand has been phenomenal",
      profileImage: profileImage,
      name: "Nexa Reach",
      // position: "CEO, Facebook",
    },
    {
      quoteIcon: quoteIcon,
      text: "INX Digitals LTD turned our app idea into a fully functional and scalable solution. Their technical expertise, user-friendly design, and seamless development process ensured a high-quality product. We couldn’t have asked for a better team to bring our vision to life!",
      profileImage: profileImage,
      name: "SoftEdge Solutions",
      // position: "CEO, Facebook",
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
