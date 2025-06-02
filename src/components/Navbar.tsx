import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">
              <span className="village-name">श्रीरामपुर</span>
              <span className="panchayat-text">ग्राम पंचायत</span>
            </span>
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className={`nav-item ${isActive('/')}`}>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                {t('nav.home')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/about')}`}>
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                {t('nav.about')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/services')}`}>
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                {t('nav.services')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/events')}`}>
              <Link to="/events" className="nav-link" onClick={closeMenu}>
                {t('nav.events')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/gallery')}`}>
              <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                {t('nav.gallery')}
              </Link>
            </li>
            <li className={`nav-item ${isActive('/contact')}`}>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                {t('nav.contact')}
              </Link>
            </li>
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;