import React from 'react';
import './RespiratoryCareSection.css'; // Optional CSS file
import img18 from '../assets/img18.jpg'; // Ensure this image exists

export default function RespiratoryCareSection() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 px-5">
          <h2 className="fw-bold display-5">
            <span
              style={{
                borderBottom: '3px solid #5e8c61',
                color: '#5e8c61',
                display: 'inline-block',
              }}
            >
              Respiratory Care
            </span>
          </h2>

          <h5 className="fw-medium mt-3">BREATH EASY WITH NATURAL SOLUTIONS</h5>
          <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Respiratory conditions like asthma, allergies, bronchitis, and sinusitis can affect your quality of life. 
            Our approach focuses on strengthening your immune system, improving lung health, and reducing inflammation through holistic treatments. 
            Breathe freely and live better with natural care that targets the root of respiratory issues.
          </p>
          
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={img18}
            alt="Respiratory Care"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: '600px',
              width: '80%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
      </div>
    </section>
  );
}
