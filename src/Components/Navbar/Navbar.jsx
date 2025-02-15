import React, {useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className='container'>

        <img src={Logo} alt="" className='Logo'/>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="ourService">Our Services</a></li>
            <li><a href="aboutUs">About Us</a></li>
            <li><a href="contact"><button className='btn'>Contact Us</button></a></li>
        </ul>

    </nav>
  );
};

export default Navbar;