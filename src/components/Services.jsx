import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Music Production",
      icon: "🎵",
      points: ["Song composition & arrangement", "Vocal tuning & production", "Mixing & mastering", "Background score"]
    },
    {
      title: "Video Production",
      icon: "🎞️",
      points: ["Music & lyric videos", "Short films & testimonies", "Church event coverage", "Cinematic editing"]
    },
    {
      title: "Live Streaming",
      icon: "📡",
      points: ["Church services", "Conferences & crusades", "Concerts & events", "Multi-camera production"]
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="text-gradient-gold">Services</span></h2>
          <p>Professional media production services for churches and Christian artists</p>
        </div>
        
        <div className="services-grid">
          {services.map((svc, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <ul>
                {svc.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline btn-sm">Get Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
