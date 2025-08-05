import React from 'react';
import img27 from '../assets/img27.jpg';
import './StomachGastricPage.css';

const StomachGastricPage = () => {
  return (
    <div className="stomach-page">
      <h1 className="page-title">Stomach & Gastric Care</h1>

      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={img27} alt="Stomach Care" className="hero-image" />
        </div>
        <div className="hero-content">
          <h2>Effective Ayurvedic Treatments for Gastric Disorders</h2>
          <p>
            Gastric problems such as acidity, indigestion, and ulcers are commonly caused by poor diet,
            stress, and lifestyle habits. Our clinic offers natural Ayurvedic solutions tailored to your body type.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Our Treatment Approach</h2>
        <ul>
          <li>🌿 Customized Herbal Remedies</li>
          <li>🌿 Detoxification and Panchakarma Therapy</li>
          <li>🌿 Diet and Lifestyle Adjustments</li>
          <li>🌿 Stress Management Techniques</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience and thousands of satisfied patients, we combine traditional Ayurvedic wisdom
          with modern diagnostic tools to offer holistic healing.
        </p>
      </section>
    </div>
  );
};

export default StomachGastricPage;
