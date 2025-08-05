import React from 'react';
import './NaturalHealingSection.css';
import herbsImage from '../assets/img5.png'; // updated image import
import { HashLink } from 'react-router-hash-link';

const NaturalHealingSection = () => {
  return (
    <section className="natural-healing-section">
      <div className="image-box">
        <img src={herbsImage} alt="Natural Medicine" />
      </div>
      <div className="content-box">
        <h1>
          Helping You Heal, Grow,<br />
          and Thrive Naturally
        </h1>
        <p>
          Our experienced homeopaths offer personalized remedies that address the root cause of your
          health concerns. We focus on restoring balance, strengthening immunity, and supporting your
          long-term well-being—all in a calm, patient-centered setting.
        </p>
        <HashLink smooth to="/about-us#about-clinic" className="about-btn">
  About Clinic <span className="arrow">→</span>
</HashLink>

      </div>
    </section>
  );
};

export default NaturalHealingSection;
