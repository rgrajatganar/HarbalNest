import React from 'react';
import './AboutHeroSection.css';
import img19 from '../assets/img21.jpg'; // your image

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <img src={img19} alt="About HerbalNest" className="about-hero-img" />
      <div className="about-hero-overlay">
        <div className="about-hero-text">
          <h4>Personal Care</h4>
          <h1>Natural Cure</h1>
          <h2>Lasting Health</h2>
          <div className="highlighted-text">
            Experience natural healing backed by centuries of wisdom and care
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
