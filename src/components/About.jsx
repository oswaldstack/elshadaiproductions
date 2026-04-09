import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Our <span className="text-gradient-gold">Story</span></h2>
            <p>
              Elshadai Productions is a Tamilnadu-based premium audio and video production studio, founded by John Praison, dedicated to creating powerful gospel music, worship visuals, cinematic lyric videos, and high-quality media content.
            </p>
            <p>
              We specialize in music production, mixing, mastering, worship video shoots, promo reels, color grading, and post-production, helping artists, churches, ministries, and brands bring their vision to life with excellence.
            </p>
            <p>
              With a passion for creativity and spiritual storytelling, our mission is to produce content that not only sounds professional and looks cinematic, but also carries purpose, emotion, and impact.
            </p>
            <p>
              From studio recording sessions to full-scale video production, every project at Elshadai Productions is crafted with precision, faith, and premium quality.
            </p>
            
            <div className="stats-container">
              <div className="stat-card glass-card">
                <h3>50+</h3>
                <span>Projects</span>
              </div>
              <div className="stat-card glass-card">
                <h3>15+</h3>
                <span>Churches Served</span>
              </div>
              <div className="stat-card glass-card">
                <h3>100%</h3>
                <span>Dedication</span>
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper">
             <div className="about-decor decor-1"></div>
             <div className="about-decor decor-2"></div>
             <img src="/images/studio-setup.png" alt="Elshadai Productions Studio Setup" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
