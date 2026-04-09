import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'glass scanned' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <div className="logo-main">Elshadai<span className="text-gradient-gold">Productions</span></div>
          <div className="company-type">Pvt Ltd</div>
        </a>

        <div 
          className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Music</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="btn btn-outline" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
