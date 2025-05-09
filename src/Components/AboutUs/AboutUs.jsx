import React from 'react'; 
import './AboutUs.css';
import image1 from "../../assets/AboutUs-image1.png";
import image2 from "../../assets/AboutUs-image2.png";
import image3 from "../../assets/AboutUs-image3.png";
import image4 from "../../assets/AboutUs-image4.png";
import coreValueImage1 from "../../assets/box-image1.png";
import coreValueImage2 from "../../assets/box-image2.png";
import coreValueImage3 from "../../assets/box-image3.png";
import coreValueImage4 from "../../assets/box-image4.png";
import coreValueImage5 from "../../assets/box-image5.png";

const AboutUs = () => {
  return (
    <div className="aboutUs-container" id='aboutUs'>
        <div className="aboutUs-header">
            <h2>ABOUT US</h2>
        </div>
        <div className="aboutUs-images">
            <img className="image-1 grid-img" src={image1} alt=""/>
            <img className="image-2 grid-img" src={image2} alt=""/>
            <img className="image-3 grid-img" src={image3} alt=""/>
            <img className="image-4 grid-img" src={image4} alt=""/>
        </div>
        <div className="aboutUs-advantage">
            <h3>The INX Digitals Advantage.</h3>
            <p>
                In a fast-paced digital landscape, businesses need more than just technology—they need the 
                right strategies, tools, and expertise to thrive. At INX Digitals, we are not just a tech agency; 
                we are a powerhouse of digital transformation, driven to help companies achieve unparalleled success through 
                bespoke solutions.
            </p>
            <div className="button-AboutUs-container">
                <a href="#form-container">
                    <button className="get_started">Get Started</button>
                </a>
            </div>
        </div>
        <div className="coreValue">
            <h3>Our Core Values</h3>
            <div className="coreValue-boxes">
                <div className="coreValue-box box1"> 
                    <img className="valueImage" src={coreValueImage1} alt="Collaboration"/>
                    <h5>Collaboration</h5>
                    <p>We believe in the power of collaboration to spark innovation and drive meaningful change.</p>
                </div>
                <div className="coreValue-box box2">
                    <img className="valueImage" src={coreValueImage2} alt="Excellence"/>
                    <h5>Excellence</h5>
                    <p>We strive for excellence in all that we do, delivering high-quality solutions that exceed expectations.</p>
                </div>
                <div className="coreValue-box box3">
                    <img className="valueImage" src={coreValueImage3} alt="Integrity"/>
                    <h5>Integrity</h5>
                    <p>We operate with integrity, honesty, and transparency, fostering trust and respect in all our relationships.</p>
                </div>
                <div className="coreValue-box box4">
                    <img className="valueImage" src={coreValueImage4} alt="Creativity"/>
                    <h5>Creativity</h5>
                    <p>We embrace creativity and out-of-the-box thinking, pushing boundaries to unlock new possibilities.</p>
                </div>
                <div className="coreValue-box box5">
                    <img className="valueImage" src={coreValueImage5} alt="Impact"/>
                    <h5>Impact</h5>
                    <p>We are driven by our commitment to making a positive impact on society, leveraging technology for the greater good.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs
