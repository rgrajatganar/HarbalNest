import React from 'react';
import './ConsultationSection.css';
import img22 from '../assets/img22.png';

const ConsultationSection = () => {
  return (
    <section className="consultation-section">
      <img src={img22} alt="Consultation" className="consultation-img" />
      <button className="consultation-btn">Book your appointment</button>
    </section>
  );
};

export default ConsultationSection;
