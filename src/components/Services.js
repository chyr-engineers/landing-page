import React from 'react';
import '../assets/styles/services.css';

const services = [
  {
    title: 'Infrastructure Automation',
    description: 'Automate your infrastructure with Kubernetes and Terraform for seamless operations.'
  },
  {
    title: 'CI/CD Pipelines',
    description: 'Implement robust CI/CD pipelines using GitHub Actions and Bitbucket Pipelines.'
  },
  {
    title: 'Cloud Computing',
    description: 'Leverage AWS for scalable and efficient cloud computing solutions.'
  },
  {
    title: 'Backend Development',
    description: 'Develop reliable backends with Node.js, C#, and FastAPI Python.'
  },
  {
    title: 'Frontend Development',
    description: 'Create dynamic user interfaces with React.'
  },
];

const Services = () => {
  const scrollLeft = () => {
    const container = document.getElementById('services-container');
    const cardWidth = container.querySelector('.service').offsetWidth;
    container.scrollLeft -= cardWidth + 20; // Adjust to match gap
  };

  const scrollRight = () => {
    const container = document.getElementById('services-container');
    const cardWidth = container.querySelector('.service').offsetWidth;
    container.scrollLeft += cardWidth + 20; // Adjust to match gap
  };

  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-wrapper">
        <button className="arrow left" onClick={scrollLeft}>&#9664;</button>
        <div id="services-container" className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&#9654;</button>
      </div>
    </div>
  );
};

export default Services;
