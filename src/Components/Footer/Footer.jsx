import React from 'react';
import "../Footer/Footer.css"
import logo from "../../assets/INX_DIGITAL_LOGO_DESIGN0.png";
import instagram from "../Images/instagram-fill.png"
import x from "../Images/prime_twitter.png"
import facebook from "../Images/uil_facebook.png"
import linkedin from "../Images/mdi_linkedin.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="logo">
          <img src={ logo } alt="" 
          className="logo-img"
          // style={{ height : "300px"}}
          /> <span style={{color: "red", fontSize: "8px", marginRight: "38px"}}>RC: 8193592</span>
        </div>
        <div className="socials">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/inxdigitalsltd/">
            <img src={ instagram } alt="" className="ig social-icon"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/inxdigitalsltd">
            <img src={ x } alt="" className="twitter social-icon"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/inxdigitalsltd/">
            <img src={ facebook } alt="" className="fb social-icon"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/inxdigitals/?viewAsMember=true">
            <img src={ linkedin } alt="" className="linkedin social-icon"/>
          </a>
        </div>
      </div>
      <div className="border-line"></div>
      <p className="copyright">© 2025 . All Rights Reserved by INX DIGITAL LTD.   
        {/* <span className='rc-number'> RC: 8193592</span> */}
      </p>
    </div>
  )
}

export default Footer
