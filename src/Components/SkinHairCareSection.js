import React from 'react';
import './SkinHairCareSection.css';
import img16 from '../assets/img16.jpg'; 

export default function SkinHairCareSection() {
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
              Skin & Hair Care
            </span>
          </h2>

          <h5 className="fw-medium mt-3">NATURAL CARE FOR SKIN & HAIR</h5>
          <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Healthy skin and hair reflect your internal health and overall wellness. A good skin and hair care routine helps you look confident and feel good every day. Issues like acne, dryness, hair fall, or dandruff can be effectively treated with the right balance of natural care, hydration, nutrition, and lifestyle. Our methods focus on holistic healing to nourish your skin and hair from within, promoting long-lasting results rather than temporary fixes.
          </p>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
<img
  src={img16}
  alt="Skin and Hair Care"
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
