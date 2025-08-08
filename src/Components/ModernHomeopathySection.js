import React from 'react';
import './ModernHomeopathySection.css';
import img10 from '../assets/img10.png';

const ModernHomeopathySection = () => {
  return (
    <div className="modern-section container">
      <div className="row text-center mb-5">
        <div className="col-md-6 text-md-start text-center">
          <h2 className="section-title">Modern Homeopathy<br />With a Personal Touch</h2>
        </div>
        <div className="col-md-6  text-center">
          <p className="section-subtitle">Gentle, natural healing<br />designed around you</p>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 d-flex flex-column gap-4">
          <div className="info-card">
            <i className="icon bi bi-search"></i>
            <div>
              <h5>Years of Research & Practice</h5>
              <p>Backed by decades of homeopathic knowledge and real-world clinical experience.</p>
            </div>
          </div>

          <div className="info-card">
            <i className="icon bi bi-flask"></i>
            <div>
              <h5>Safe & Side-Effect-Free Formulas</h5>
              <p>Our remedies are gentle, natural, and suitable for people of all ages.</p>
            </div>
          </div>

          <div className="info-card">
            <i className="icon bi bi-calendar-check"></i>
            <div>
              <h5>Flexible Appointments</h5>
              <p>We offer convenient scheduling options to fit your routine and needs.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center my-4 my-md-0">
          <img src={img10} alt="center herbs" className="center-image" />
        </div>

        <div className="col-md-4 d-flex flex-column gap-4">
          <div className="info-card">
            <i className="icon bi bi-clipboard-check"></i>
            <div>
              <h5>Transparency in Treatment</h5>
              <p>Clear communication about remedies, progress, and what to expect—no guesswork.</p>
            </div>
          </div>

          <div className="info-card">
            <i className="icon bi bi-person-vcard"></i>
            <div>
              <h5>Patient-Centric Approach</h5>
              <p>We take time to understand you—your lifestyle, symptoms, and wellness goals.</p>
            </div>
          </div>

          <div className="info-card">
            <i className="icon bi bi-search-heart"></i>
            <div>
              <h5>Root-Cause Approach</h5>
              <p>We treat the underlying causes—not just the symptoms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHomeopathySection;
