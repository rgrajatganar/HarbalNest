import React from 'react';
import './AboutClinicSection.css';

const AboutClinicSection = () => {
  return (
    <div id="about-clinic" className="about-clinic-container py-5">
      <div className="container text-center">
        <div className="clinic-title-wrapper mb-4">
          <h2 className="clinic-title">About Our Clinic</h2>
        </div>

        <p className="clinic-description mx-auto">
          Welcome to <strong>Homeopathy and Wellness</strong> – your trusted destination for <strong>natural healing</strong> and personalized care. With a blend of classical homeopathy and modern holistic practices, we offer treatments that are <strong>gentle, safe</strong>, and tailored to your unique constitution.
          <br /><br />
          Our expert team addresses the <strong>root cause</strong> of illness rather than suppressing symptoms, guiding patients toward <strong>long-term wellness</strong> and emotional balance.
          <br /><br />
          We specialize in chronic and lifestyle-related issues, from <strong>stress, skin concerns, and hormonal imbalances</strong> to <strong>children’s health</strong> and <strong>women’s wellness</strong>. Every patient is treated with empathy, time, and a commitment to finding a sustainable solution.
        </p>
      </div>
    </div>
  );
};

export default AboutClinicSection;
