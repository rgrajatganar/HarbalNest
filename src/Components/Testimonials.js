import React, { useState } from 'react';
import './TestimonialSection.css';
import img11 from '../assets/img11.png';
import img12 from '../assets/img2.jpg';
import img13 from '../assets/img3.jpg';

const testimonials = [
  {
    image: img11,
    quote: "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident.",
    name: "David Gahan",
    location: "Detroit, Michigan"
  },
  {
    image: img12,
    quote: "Their remedies have helped me more than modern medicine. I feel truly healed and energetic again.",
    name: "Emily Rose",
    location: "Austin, Texas"
  },
  {
    image: img13,
    quote: "Natural care at its finest. I always recommend them to friends and family.",
    name: "Rahul Mehta",
    location: "Mumbai, India"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <h2>What People Say About Us</h2>
      <div className="testimonial-content">
        <button className="arrow left" onClick={handlePrev}>←</button>
        <div className="testimonial-box">
          <img src={current.image} alt="User" className="testimonial-image" />
          <p className="testimonial-quote">"{current.quote}"</p>
          <h4 className="testimonial-name">{current.name}</h4>
          <p className="testimonial-location">{current.location}</p>
        </div>
        <button className="arrow right" onClick={handleNext}>→</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
