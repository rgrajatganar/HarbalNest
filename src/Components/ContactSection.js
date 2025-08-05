import React from 'react';
import './ContactSection.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay">
        <div className="container">
          <div className="contact-wrapper">
          
            <div className="appointment-form">
              <h2>Book Appointment</h2>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile" />
              <input type="email" placeholder="Email" />
              <button>Book Now</button>
            </div>

            <div className="contact-info">
              <h2>Contact</h2>
              <p><FaMapMarkerAlt /> 92 Serangoon Rd, #02, Singapore 21799</p>
              <p><FaPhone /> +65-88933212</p>
              <p><FaEnvelope /> dr.poonamsg@gmail.com</p>

              <h4>Follow us on</h4>
              <div className="social-icons">
                <FaInstagram />
                <FaWhatsapp />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default ContactSection;
