import React from 'react';
import img19 from '../assets/img19.jpg'; // Make sure the image exists

export default function PainManagementSection() {
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
              Pain Management
            </span>
          </h2>

          <h5 className="fw-medium mt-3">NATURAL RELIEF FOR CHRONIC PAIN</h5>
          <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Living with chronic pain can impact your physical and emotional well-being. Our holistic approach to pain management uses natural methods to reduce inflammation, improve mobility, and promote long-term healing without dependency on harmful medications. Experience relief through therapies tailored to your needs—safe, effective, and lasting.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={img19}
            alt="Pain Management"
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
