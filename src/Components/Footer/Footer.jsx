import React from 'react';
import "../Footer/Footer.css"
import logo from "../../assets/Logo.png";
import instagram from "../Images/instagram-fill.png"
import x from "../Images/prime_twitter.png"
import facebook from "../Images/uil_facebook.png"
import linkedin from "../Images/mdi_linkedin.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="logo">
          <img src={ logo } alt="" style={{width : "347px", height : "300px"}}/>
        </div>
        <div className="socials">
            <img src={ instagram } alt="" className="ig social-icon"/>
            <img src={ x } alt="" className="twitter social-icon"/>
            <img src={ facebook } alt="" className="fb social-icon"/>
            <img src={ linkedin } alt="" className="linkedin social-icon"/>
        </div>
      </div>
      <div className="border-line"></div>
      <p className="copyright">© 2024 . All Rights Reserved by INX DIGITAL INNOVATION</p>
    </div>
  )
}

export default Footer
