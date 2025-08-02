import React from 'react';
import './Hero.css';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import avtar1 from '../assets/avtar1.jpg';
import avtar2 from '../assets/avtar2.jpg';
import avtar3 from '../assets/avtar3.jpg';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="hero-text">
          <h1>Natural Solution for Great Health</h1>
          <p>Experience holistic wellness through trusted homeopathic solutions, tailored for your unique needs.</p>
          <button className="consult-btn">Consult Now</button>
          <div className="happy-patients">
            <img src={avtar1} alt="avatar1" />
            <img src={avtar2} alt="avatar2" />
            <img src={avtar3} alt="avatar3" />
            <span><strong>500+</strong> Happy Patients</span>
          </div>
        </div>
        <div className="hero-images">
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
