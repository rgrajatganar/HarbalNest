import React from 'react';
import img26 from '../assets/img26.jpg';
import './SkinDiseasesPage.css';

const SkinDiseasesPage = () => {
  return (
    <div className="skin-diseases-page">
      <h1 className="page-title">Skin Diseases</h1>

      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={img26} alt="Skin Care" className="hero-image" />
        </div>
        <div className="hero-content">
          <h2>Natural Healing for Skin Conditions</h2>
          <p>
            HerbalNest offers natural remedies for a wide range of skin diseases using the power of Ayurveda and herbal science.
            From eczema and acne to fungal infections and psoriasis, our treatments focus on healing from the root.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Common Skin Issues We Treat</h2>
        <ul>
          <li>✔ Acne & Pimples</li>
          <li>✔ Eczema</li>
          <li>✔ Psoriasis</li>
          <li>✔ Fungal Infections</li>
          <li>✔ Rashes & Redness</li>
          <li>✔ Allergic Reactions</li>
        </ul>
      </section>

      <section className="treatment-section">
        <h2>Our Herbal Treatment Approach</h2>
        <p>
          We combine traditional herbal formulations with modern naturopathy. Our skin care treatments use:
        </p>
        <ul>
          <li>🌿 Neem, Aloe Vera & Turmeric-based creams</li>
          <li>🌿 Herbal detox tonics to purify blood</li>
          <li>🌿 Diet & lifestyle counseling to prevent triggers</li>
          <li>🌿 Personalized skin care routines</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Tips for Healthy Skin</h2>
        <ul>
          <li>✅ Stay hydrated and eat green vegetables</li>
          <li>✅ Avoid harsh soaps and chemical products</li>
          <li>✅ Get proper sleep and reduce stress</li>
          <li>✅ Use natural cleansers like rose water</li>
        </ul>
      </section>
    </div>
  );
};

export default SkinDiseasesPage;
