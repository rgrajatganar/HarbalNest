import React from 'react';

const AboutContentSection = () => {
  return (
    <section className="container py-5">
      <h2 className="text-success fw-bold mb-4">Who We Are</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        HerbalNest is dedicated to promoting health through natural remedies and holistic treatments. We believe in the power of homeopathy and plant-based medicine to restore balance and vitality in everyday life.
      </p>
      <h3 className="mt-5 text-success">Our Mission</h3>
      <p>
        To empower people by providing natural, effective, and accessible healthcare solutions that heal from within and align with nature’s rhythm.
      </p>
      <h3 className="mt-4 text-success">Why Choose Us?</h3>
      <ul className="mt-2">
        <li>✓ Safe and effective homeopathy solutions</li>
        <li>✓ Experienced and caring professionals</li>
        <li>✓ Focus on long-term wellness</li>
      </ul>
    </section>
  );
};

export default AboutContentSection;
