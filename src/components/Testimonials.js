import React from 'react';
import '../assets/styles/testimonials.css';

const testimonials = [
  {
    client: 'Green Valley Farms',
    location: 'Australia',
    feedback: 'Chyr Engineers LLC transformed our IT infrastructure with their exceptional DevOps services. Their expertise in automation and cloud solutions has significantly enhanced our operational efficiency and productivity. We highly recommend their services to anyone looking to optimize their development lifecycle.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h3>{testimonial.client} <span className="location">({testimonial.location})</span></h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
