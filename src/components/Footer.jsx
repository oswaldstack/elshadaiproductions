import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <div className="logo-main">Elshadai<span className="text-gradient-gold">Productions</span></div>
              <div className="company-type">Pvt Ltd</div>
            </a>
            <p className="brand-desc">
              Where Faith Meets Creativity. Professional media production services for churches and artists.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/elshadaiproductions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href="https://www.youtube.com/@elshadaiproductions" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                YT
              </a>
              <a href="https://www.linkedin.com/company/elshadai-productions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LI
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Music Production</a></li>
              <li><a href="#services">Video Production</a></li>
              <li><a href="#services">Live Streaming</a></li>
              <li><a href="#services">Mixing & Mastering</a></li>
              <li><a href="#services">Song Composition</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and releases.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
               <div className="newsletter-input-group">
                 <input type="email" placeholder="Your Email" required />
                 <button type="submit" className="btn btn-primary">Go</button>
               </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elshadai Productions. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
