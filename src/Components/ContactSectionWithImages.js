import React from 'react';
import './ContactSectionWithImages.css';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';

const ContactSectionWithImages = () => {
  return (
    <div className="contact-section">
      <div className="image-stack">
        <div className="top-row">
          <img src={img12} alt="Remedy 1" />
          <img src={img13} alt="Remedy 2" />
        </div>
        <div className="bottom-row">
          <img src={img14} alt="Remedy 3" />
        </div>
      </div>
      <div className="form-card">
        <h2>Get in touch</h2>
        <p>You can reach us anytime</p>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="First Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Get Your First Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSectionWithImages;
