import React from 'react';
import '../assets/styles/about.css';
import icon1 from '../assets/icons/expertise.svg';
import icon2 from '../assets/icons/innovation.svg';
import icon3 from '../assets/icons/partnership.svg';
import icon4 from '../assets/icons/integrity.svg'; // New icon for Integrity

const About = () => {
  return (
    <div className="about-container">
      <div className="card">
        <img src={icon1} alt="Expertise Icon" className="card-icon" />
        <h2 className="card-title">Expertise</h2>
        <p className="card-content">
          Our expertise covers a broad spectrum of DevOps practices, including infrastructure automation, continuous integration and delivery (CI/CD), and cloud computing.
        </p>
      </div>
      <div className="card">
        <img src={icon2} alt="Innovation Icon" className="card-icon" />
        <h2 className="card-title">Innovative Solutions</h2>
        <p className="card-content">
          At Chyr Engineers LLC, we excel in delivering comprehensive DevOps Engineering Services designed to streamline your development processes and enhance operational efficiency.
        </p>
      </div>
      <div className="card">
        <img src={icon3} alt="Partnership Icon" className="card-icon" />
        <h2 className="card-title">Partnership</h2>
        <p className="card-content">
          Partner with Chyr Engineers LLC to leverage our deep understanding of DevOps principles and methodologies, and transform your development lifecycle into a seamless, integrated, and highly efficient operation.
        </p>
      </div>
      <div className="card">
        <img src={icon4} alt="Integrity Icon" className="card-icon" />
        <h2 className="card-title">Integrity</h2>
        <p className="card-content">
          At Chyr Engineers LLC, we uphold the highest standards of integrity in all our actions. Our commitment to honesty and ethical behavior ensures that we consistently deliver quality and build lasting trust with our clients.
        </p>
      </div>
    </div>
  );
};

export default About;
