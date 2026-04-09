import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-video-wrapper">
        <img src="/background.png" alt="Hero Background" className="hero-video" />
        <div className="hero-overlay"></div>
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
      </div>
      
      <div className="rec-indicator">
        <span className="rec-dot"></span> REC
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="animate-fade-in stagger-1">
            Where <span className="text-gradient-gold">Faith</span> Meets <br/>
            <span className="text-gradient-gold">Creativity</span>
          </h1>
          <p className="animate-fade-in stagger-2">
            Creating powerful Christian media that inspires hearts and transforms lives. Top-tier production from Thoothukudi.
          </p>
          <div className="hero-buttons animate-fade-in stagger-3">
            <a href="#projects" className="btn btn-primary">
              <span className="eq-bars">
                <span></span><span></span><span></span><span></span>
              </span>
              Listen Now
            </a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </div>

      <a href="#services" className="scroll-indicator">
        <span></span>
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
