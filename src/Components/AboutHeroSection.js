import React from 'react';
import './AboutHeroSection.css';
import img23 from '../assets/img23.png';


const AboutHeroSection = () => {
  return (
    <div className="about-hero-section">
      <div className="hero-content">
        <h1>Welcome to Herbal Nest</h1>
        <p>Experience holistic healing through modern homeopathy and compassionate care.</p>
      </div>
      <div className="hero-image">
        <img src={img23} alt="Clinic Hero" />

      </div>
    </div>
  );
};

export default AboutHeroSection;
