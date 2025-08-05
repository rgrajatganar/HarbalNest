import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat-card">
        <h2>20+</h2>
        <p>Years of Experience</p>
      </div>
      <div className="stat-card">
        <h2>5K+</h2>
        <p>Happy Patients</p>
      </div>
      <div className="stat-card">
        <h2>100+</h2>
        <p>Treatments Available</p>
      </div>
    </section>
  );
};

export default StatsSection;
