// src/components/Header.js
import React, { useState } from 'react';
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "line line1 open" : "line line1"}></div>
          <div className={isOpen ? "line line2 open" : "line line2"}></div>
          <div className={isOpen ? "line line3 open" : "line line3"}></div>
        </div>
        <ul className={isOpen ? "nav-list open" : "nav-list"}>
          <li className="nav-item" onClick={() => scrollToSection('about')}>About</li>
          <li className="nav-item" onClick={() => scrollToSection('services')}>Services</li>
          <li className="nav-item" onClick={() => scrollToSection('testimonials')}>Testimonials</li>
          <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
