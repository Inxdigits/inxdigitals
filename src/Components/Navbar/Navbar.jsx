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
      <a href="#">
        <img src={Logo} alt="Logo" className='Logo'/>
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
          ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#ourService">Our Services</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li className="nav-button">
              <a href="#contact"><button className='btn'>Contact Us</button></a>
          </li>
      </ul>
    </nav>

  );
};

export default Navbar;