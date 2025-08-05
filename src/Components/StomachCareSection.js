import React from 'react';
import './StomachCareSection.css'; // Optional for extra styles
import img17 from '../assets/img17.jpg'; // Replace with your actual image

export default function StomachCareSection() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 px-5">
          <h2 className="fw-bold display-5">
            <span
              style={{
                borderBottom: '3px solid #5b8752',
                color: '#5b8752',
                display: 'inline-block',
              }}
            >
              Stomach Care
            </span>
          </h2>

          <h5 className="fw-medium mt-3">HEAL DIGESTIVE ISSUES NATURALLY</h5>
          <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Digestive problems like acidity, bloating, and constipation can affect your energy, mood, and overall health. 
            Our natural stomach care approach focuses on addressing the root causes with personalized remedies, dietary guidance, and lifestyle tips. 
            Feel light, energetic, and healthy with our holistic and side-effect-free solutions.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={img17}
            alt="Stomach Care"
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
