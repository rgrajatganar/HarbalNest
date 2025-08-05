import React from 'react';
import './AboutHeroBanner.css';
import img21 from '../assets/img21.jpg';

const AboutHeroBanner = () => {
  return (
    <div className="about-hero-banner" style={{ backgroundImage: `url(${img21})` }}>
      <div className="overlay">
        <h1>Personal Care<br />Natural Cure<br />Lasting Health</h1>
        <p>Experience natural healing backed by centuries of wisdom and care</p>
      </div>
    </div>
  );
};

export default AboutHeroBanner;

