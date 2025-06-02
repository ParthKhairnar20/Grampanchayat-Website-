import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-page">
      <HeroSection 
        title="Contact Us" 
        subtitle="Reach out to the ShreeRampur Gram Panchayat"
        backgroundImage="https://images.pexels.com/photos/1655901/pexels-photo-1655901.jpeg"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We are here to assist you with any queries or concerns. Feel free to reach out
                to us through any of the following channels:
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>Our Address</h3>
                    <p>Gram Panchayat Office, ShreeRampur,<br />District: Pune, Maharashtra - 412108</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>Phone Numbers</h3>
                    <p>Office: +91 2345 678901<br />Sarpanch: +91 98765 43210</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>Email Address</h3>
                    <p>grampanchayat.shreerampur@gov.in<br />sarpanch.shreerampur@gov.in</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Clock size={24} className="contact-icon" />
                  <div className="contact-text">
                    <h3>Office Hours</h3>
                    <p>Monday to Saturday: 10:00 AM - 5:00 PM<br />Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Visit our office in ShreeRampur village</p>
          </div>
          
          <div className="map-container">
            {/* This is a placeholder for a real map */}
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin size={48} className="map-icon" />
                <p>Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
          
          <div className="directions">
            <h3>How to Reach Us</h3>
            <div className="direction-options">
              <div className="direction-option">
                <h4>By Bus</h4>
                <p>Take state transport bus to ShreeRampur bus stop. The Panchayat office is 500m from the bus stop.</p>
              </div>
              
              <div className="direction-option">
                <h4>By Car</h4>
                <p>From Pune, take the Pune-Solapur highway and turn at ShreeRampur junction. Follow the signboards to reach the village center.</p>
              </div>
              
              <div className="direction-option">
                <h4>By Train</h4>
                <p>The nearest railway station is Hadapsar (15 km). Take an auto-rickshaw or bus to reach ShreeRampur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="container">
          <div className="feedback-content">
            <h2>Your Feedback Matters</h2>
            <p>
              We value your suggestions and feedback to improve our services.
              Please share your thoughts to help us serve you better.
            </p>
            <button className="btn-secondary">Give Feedback</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;