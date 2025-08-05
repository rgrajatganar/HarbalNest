import React from 'react';
import './SpecialtySection.css';
import { FaPills } from 'react-icons/fa'; // pill icon

const specialties = [
  { title: 'Excessive anxiety', desc: 'Get consultation from our Dentistry team' },
  { title: 'Depression', desc: 'Get consultation from our Psychology team' },
  { title: 'Stress', desc: 'Get consultation from our Neuro Surgery team' },
  { title: 'Asthma', desc: 'Get consultation from our Cardiology team' },
  { title: 'Arthritis', desc: 'Get consultation from our Pharmacy team' },
  { title: 'Allergy', desc: 'Get consultation from our Trained staff team' },
  { title: 'Conjunctivitis', desc: 'Get consultation from our DNA Mapping team' },
  { title: 'Pigmentation', desc: 'Get consultation from our Pharmacy team' },
];

const SpecialtySection = () => {
  return (
    <section className="specialty-section">
      <h2 className="specialty-title">Our Specialty</h2>

      <div className="specialty-grid">
        {specialties.map((item, index) => (
          <div key={index} className="specialty-card">
            <div className="specialty-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <FaPills className="specialty-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialtySection;