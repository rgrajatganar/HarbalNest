import React from 'react';
import './AboutContentSection.css';

const AboutContentSection = () => {
  return (
    <section className="about-content-section py-5 px-4">
      <div className="container">
        <h2 className="text-success fw-bold mb-4">Our Journey</h2>
        <p className="lead">
          HerbalNest was founded with a vision to bring natural, homeopathic care to everyone.
          With years of experience in holistic healing, our team focuses on treatments that not only
          address symptoms but also rejuvenate the entire body and mind. Our mission is to empower
          people with natural solutions rooted in ancient wisdom and backed by modern research.
        </p>
        <p>
          Whether it's your skin, hair, digestion, or respiratory system – we offer a range of personalized treatments designed with care and compassion.
          Join us in our journey towards natural wellness and discover how nature can be your best medicine.
        </p>
      </div>
    </section>
  );
};

export default AboutContentSection;
