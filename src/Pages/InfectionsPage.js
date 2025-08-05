import React from 'react';
import './InfectionsPage.css';
import img29 from '../assets/img29.jpg';

const InfectionsPage = () => {
  return (
    <div className="infections-page">
      <h1 className="page-title">Infections</h1>

      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={img29} alt="Infection Treatment" className="hero-image" />
        </div>
        <div className="hero-content">
          <h2>Natural & Effective Ayurvedic Care for Infections</h2>
          <p>
            Infections are caused by harmful microorganisms and can affect various parts of the body.
            We treat infections holistically using traditional herbs, detox therapies, and immunity boosters.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Common Types of Infections</h2>
        <ul>
          <li>🫁 Respiratory (Cold, Flu, Sinusitis)</li>
          <li>🧴 Skin (Boils, Fungal, Acne)</li>
          <li>🍽️ Digestive (Food Poisoning, Diarrhea)</li>
          <li>💧 Urinary Tract Infections (UTI)</li>
        </ul>
      </section>

      <section className="treatment-section">
        <h2>Symptoms</h2>
        <ul>
          <li>🌡️ Fever, chills, and fatigue</li>
          <li>🩹 Redness, swelling, or pus</li>
          <li>🤧 Cough, sore throat, nasal discharge</li>
          <li>😵 Abdominal pain, nausea, or diarrhea</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Ayurvedic Treatment Approach</h2>
        <ul>
          <li>🌿 Natural antibiotics: Neem, Giloy, Tulsi</li>
          <li>🧘 Panchakarma detoxification</li>
          <li>💪 Immunity boost with Rasayana herbs</li>
          <li>🍲 Personalized diet and lifestyle plan</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Why Choose Herbal Nest?</h2>
        <ul>
          <li>✅ Holistic treatment tailored to root cause</li>
          <li>✅ No side effects – completely natural</li>
          <li>✅ Trusted by thousands for chronic & acute care</li>
        </ul>
      </section>
    </div>
  );
};

export default InfectionsPage;
