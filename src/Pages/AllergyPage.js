import React from 'react';
import './AllergyPage.css';
import img28 from '../assets/img28.jpg';

const AllergyPage = () => {
  return (
    <div className="allergy-page">
      <h1 className="page-title">Allergy</h1>

      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={img28} alt="Allergy Treatment" className="hero-image" />
        </div>
        <div className="hero-content">
          <h2>Understanding and Managing Allergies Naturally</h2>
          <p>
            Allergies occur when the immune system overreacts to harmless substances like pollen, food, or dust.
            At Herbal Nest, we help treat the root cause using safe, natural Ayurvedic practices.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Common Allergy Symptoms</h2>
        <ul>
          <li>🤧 Sneezing, nasal congestion, and runny nose</li>
          <li>👁️ Itchy, red, or watery eyes</li>
          <li>🌿 Skin rashes, eczema, or hives</li>
          <li>😮‍💨 Shortness of breath or wheezing</li>
          <li>🍽️ Digestive issues like bloating or nausea</li>
        </ul>
      </section>

      <section className="treatment-section">
        <h2>Our Ayurvedic Approach</h2>
        <ul>
          <li>🌱 Herbal immunity boosters (Turmeric, Tulsi, Amla)</li>
          <li>🌱 Nasya therapy (nasal drops) for sinus relief</li>
          <li>🌱 Detox to remove toxins (Ama)</li>
          <li>🌱 Diet & lifestyle changes per body type (Prakriti)</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Why Choose Herbal Nest?</h2>
        <ul>
          <li>✅ Personalized treatments for your allergy type</li>
          <li>✅ 100% natural, no side effects</li>
          <li>✅ Expert Ayurvedic practitioners</li>
        </ul>
      </section>
    </div>
  );
};

export default AllergyPage;
