import React, { useState } from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src='https://a2developers.org/images/logo1.png' alt="A2 Developers Logo" className="navbar-logo" />
        <span className="company-name">A2 Developers</span>
      </div>
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#product" onClick={() => setIsMenuOpen(false)}>Product</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 