import React from 'react';
import './AboutClinicSection.css';

const AboutClinicSection = () => {
  return (
    <section className="about-clinic-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">About Clinic</h2>

        <p className="clinic-description mx-auto">
          <span className="first-letter">A</span>t Homeopathy and Wellness, we provide <strong>natural, gentle, and effective</strong> homeopathic treatments for all ages.
          Our experienced practitioners focus on <strong>healing the root cause</strong>, promoting overall health and balance.
          We combine traditional homeopathy with wellness therapies to support your <strong>mind, body, and spirit</strong>.
          Committed to compassionate care, we help you achieve <strong>lasting wellness—naturally.</strong>
        </p>
      </div>
    </section>
  );
};

export default AboutClinicSection;

