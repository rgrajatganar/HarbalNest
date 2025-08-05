import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Shop Pages</h3>
          <ul>
            <li><NavLink to="/sexual-health" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Sexual Health</NavLink></li>
            <li><NavLink to="/skin-hair-care" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Skin & Hair Care</NavLink></li>
            <li><NavLink to="/stomach-care" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Stomach Care</NavLink></li>
            <li><NavLink to="/respiratory-care" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Respiratory Care</NavLink></li>
            <li><NavLink to="/pain-management" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Pain Management</NavLink></li>
          </ul>
        </div>

        {/* Service Pages */}
        <div className="footer-section">
          <h3>Service Pages</h3>
          <ul>
            
            <li><NavLink to="/skin-diseases" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>
  Skin Diseases
</NavLink>
</li>
            <li><NavLink to="/stomach-gastric" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Stomach-Gastric</NavLink></li>
            <li><NavLink to="/allergy" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Allergy</NavLink></li>
            <li><NavLink to="/infections" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Infections</NavLink></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/about-us" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>About Us</NavLink></li>
            <li><NavLink to="/our-services" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Our Services</NavLink></li>
            <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'footer-link active-link' : 'footer-link'}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow us on</h3>
          <div className="social-icons">
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2022 Dr Natures Services. All rights reserved.</p>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
