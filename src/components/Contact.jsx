import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "becbd347-ba41-485a-be37-79970c4badbf");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      const json = await res.json();
      if (json.success) {
        setStatus('Message sent successfully! 🚀');
        e.target.reset();
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

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
                <span className="icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Thoothukudi, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="info-item glass-card">
                <span className="icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p>elshadaiproductionss@gmail.com</p>
                </div>
              </div>

              <div className="info-item glass-card">
                <span className="icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8667649590</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group select-group">
                <label htmlFor="service" className="static-label">Select Service</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled hidden>Choose a service...</option>
                  <option value="music-production">Music Production</option>
                  <option value="video-production">Video Production</option>
                  <option value="live-streaming">Live Streaming</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder=" " rows="4" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              
              <button type="submit" className="btn btn-primary w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : (
                  <>Send Message <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                )}
              </button>
              
              {status && status !== 'Sending...' && (
                <div style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('success') ? '#10b981' : '#ef4444', fontWeight: 'bold' }}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
