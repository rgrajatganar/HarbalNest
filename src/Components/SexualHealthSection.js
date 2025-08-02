import React from 'react';
import './SexualHealthSection.css';
import img15 from '../assets/img15.jpg';

export default function SexualHealthSection() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 px-5">
          <h2 className="fw-bold display-5">
            <span
              style={{
                borderBottom: '3px solid #5b8752',
                color: '#5b8752',
                display: 'inline-block',
              }}
            >
              Sexual Health
            </span>
          </h2>

          <h5 className="fw-medium mt-3">GOOD SEXUAL HEALTH</h5>
          <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Sexual health is a big part of life. It not only affects physical well-being but also plays an important role in mental, emotional, and social health. Good sexual health is not just about preventing diseases or unplanned pregnancies—it’s about having a respectful, safe, and positive approach to sexuality and sexual relationships. It means being well-informed about your body, understanding your rights, and feeling confident in expressing your needs and setting boundaries. A person with good sexual health is careful and responsible, makes informed choices, and seeks regular medical advice when needed. 
            It also includes having access to proper healthcare services, education, and a supportive environment. 
            
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={img15}
            alt="Sexual Health"
            className="img-fluid rounded"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
