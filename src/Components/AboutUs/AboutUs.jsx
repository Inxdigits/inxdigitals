import React from 'react'
import './AboutUs.css'
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
    <div className="aboutUs-container">
        <div className="aboutUs-header">
            <h2>ABOUT US</h2>
            <div className="aboutUs-description">
                <p>Empowering Businesses with Innovative Tech Solutions...</p>
            </div>

        </div>
        <div className="aboutUs-images">
            <img className="image-1" src={image1} alt="image 1"/>
            <img className="image-2" src={image2} alt="image 2"/>
            <img className="image-3" src={image3} alt="image 3"/>
            <img className="image-4" src={image4} alt="image 4"/>

        </div>
        <div className="aboutUs-advantage">
            <h3>The INX Digital Innovative Advantage.</h3>
            <p>In a fast-paced digital landscape, businesses need more than just technology—they need the <b/>
                right strategies, tools, and expertise to thrive. At INX Digital Innovation, we are not just a tech agency; we are a powerhouse of digital transformation, driven to help companies achieve unparalleled success through bespoke solutions.</p>

        </div>
        <div className="coreValue">
            <h3>Our Core Values</h3>
            <div className="coreValue-boxes">
                <div className="coreValue-box box1">
                <img className="valueImage-1" src={coreValueImage1} alt="valueImage 1"/>
                    <h5>Collaboration</h5>
                    <p>We believe in the power of <br/>collaboration to spark <br/>innovation and drive <br/>meaningful change.</p>
                </div>
                <div className="coreValue-box box2">
                    <img className="valueImage-2" src={coreValueImage2} alt="valueImage 2"/>
                    <h5>Excellence</h5>
                    <p>We strive for excellence in <br/>all that we do, delivering<br/> high-quality solutions that<br/> exceed expectations.</p>
                </div>
                <div className="coreValue-box box3">
                <img className="valueImage-3" src={coreValueImage3} alt="valueImage 3"/>
                    <h5>Integrity</h5>
                    <p>We operate with integrity,<br/> honesty, and transparency,<br/> fostering trust and respect<br/> in all our relationships.</p>
                </div>
                <div className="coreValue-box box4">
                <img className="valueImage-4" src={coreValueImage4} alt="valueImage 4"/>
                    <h5>Creativity</h5>
                    <p>We embrace creativity and<br/> out-of-the-box thinking,<br/> pushing boundaries to<br/> unlock new possibilities.</p>
                </div>
                <div className="coreValue-box box5">
                <img className="valueImage-5" src={coreValueImage5} alt="valueImage 5"/>
                    <h5>Impact</h5>
                    <p>We are driven by our<br/> commitment to making a<br/> positive impact on society,<br/> leveraging technology for<br/> the greater good.</p>
                </div>
            </div>
        </div>
        <div className="button-AboutUs-container">
            <button className="button-AboutUs">Get Started</button>
        </div>
    </div>
  );
};

export default AboutUs