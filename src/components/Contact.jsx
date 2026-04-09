import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In <span className="text-gradient-gold">Touch</span></h2>
          <p>Let's create something amazing together</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Have a project in mind or want to know more about our services? We'd love to hear from you!</p>

            <div className="info-items">
              <div className="info-item glass-card">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Thoothukudi, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="info-item glass-card">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>elshadaiproductionss@gmail.com</p>
                </div>
              </div>

              <div className="info-item glass-card">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8667649590</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <select id="service" required defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="music-production">Music Production</option>
                  <option value="video-production">Video Production</option>
                  <option value="live-streaming">Live Streaming</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="service">Service Interested In</label>
              </div>
              <div className="form-group">
                <textarea id="message" placeholder=" " rows="4" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message 🚀</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
