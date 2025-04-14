import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/INX_DIGITAL_LOGO_DESIGN0.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set active tab when clicked
    setMenuOpen(false); // Close menu after clicking a link (optional)
  };

  return (
    <nav className='container'>
      <a href="#">
        <img src={Logo} alt="Logo" className='Logo'/>
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className={activeTab === "home" ? "active-link" : ""}
            onClick={() => handleTabClick("home")}>
          <a href="#" >
            Home
          </a>
        </li>
        <li className={activeTab === "ourService" ? "active-link" : ""}
            onClick={() => handleTabClick("ourService")}>
          <a href="#ourService" >
            Our Services
          </a>
        </li>
        <li className={activeTab === "aboutUs" ? "active-link" : ""}
            onClick={() => handleTabClick("aboutUs")}>
          <a href="#aboutUs" >
            About Us
          </a>
        </li>
        <li className={activeTab === "trainr" ? "active-link" : ""}>
          <a href="#" target="_blank" rel="noopener noreferrer">TrainR
            <span className="coming-soon">Coming Soon!</span>
          </a>
        </li>
        <li className="nav-button">
          <a href="#contact">
            <button className='btn'>Contact Us</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
