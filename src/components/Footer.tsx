import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">ShreeRampur Gram Panchayat</h3>
            <p>
              Serving the residents of ShreeRampur village with dedication and transparency,
              working together for rural development and community welfare.
            </p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="social-icon">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="social-icon">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>
                <MapPin size={16} className="contact-icon" />
                Gram Panchayat Office, ShreeRampur, Dist: Pune, Maharashtra - 412108
              </p>
              <p>
                <Phone size={16} className="contact-icon" />
                +91 98765 43210
              </p>
              <p>
                <Mail size={16} className="contact-icon" />
                grampanchayat.shreerampur@gov.in
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShreeRampur Gram Panchayat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;