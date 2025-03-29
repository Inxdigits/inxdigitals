import React from 'react'
import './WhyChoseUs.css'
import WhyUsImage1 from "../../assets/WhyUs-image1.png";
import WhyUsImage2 from "../../assets/WhyUs-image2.png";
import WhyUsImage3 from "../../assets/WhyUs-image3.png";
import WhyUsImage4 from "../../assets/WhyUs-image4.png";

const WhyChoseUs = () => {
  return (
    <div className="WhyChoseUs-container">
        <div className='content-container'>
            <div className="header-text">
                <h4>WHY <span>CHOOSE</span> US</h4>
            </div>

            <div className="middle-main">
                <h1 className="middle-text">
                    <span className="innovation-text">INX Digitals</span>
                </h1>
            </div>
            
            <div className="WhyChoseUs-body">
                <div className="left-main">
                    <div className="top-left">
                        <img className="WhyUs-image-1" src={WhyUsImage1} alt="WhyUs-image-1"/>
                        <div className="top-left-container">
                            <p className="top-left-header">Innovative Expertise</p>
                            <p className="top-left-text">
                                We combine creativity and cutting-edge<br/> technology to deliver unique, tailored solutions.
                            </p>
                        </div>
                    </div>
                
                    <div className="bottom-left">
                        <img className="WhyUs-image-2" src={WhyUsImage2} alt="WhyUs-image-2"/>
                        <div className="bottom-left-container">
                            <p className='bottom-left-header'>Proven Results</p>
                            <p className='bottom-left-text'>From stunning designs to scalable systems, we<br/> deliver outcomes that make an impact.</p>
                        </div>
                    </div>

                </div>
                <div className="custom-line"></div>
                <div className="custom-line-vertical"></div>
                
                <div className='right-main'>
                    <div className='top-right'>
                        <img className="WhyUs-image-3" src={WhyUsImage3} alt="WhyUs-image-3"/>
                        <div className="top-right-container">
                            <p className='top-right-header'>Client-Centric Approach</p>
                            <p className='top-right-text'>Your goals drive our process, ensuring every solution is aligned with your vision.</p>
                        </div>
                    </div>
                

                    <div className='bottom-right'>
                        <img className="WhyUs-image-4" src={WhyUsImage4} alt="WhyUs-image-4"/>
                        <div className="bottom-right-container">
                            <p className='bottom-right-header'>End-to-End Support</p>
                            <p className='bottom-right-text'>From ideation to execution, we’re with you every step of the way.</p>
                        </div>
                    </div>
                

                </div>
            </div>
        </div>

    </div>
  )
}

export default WhyChoseUs