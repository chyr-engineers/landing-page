import React from 'react';
import '../assets/styles/contact.css';
import emailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Chyr Engineers LLC</p>
        <p>1254, 447 Broadway,</p>
        <p>2nd Floor, New York,</p>
        <p>NY, New York, US,</p>
        <p>10013</p>
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <a href="mailto:chyrengineers@gmail.com">chyrengineers@gmail.com</a>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <a href="tel:+573193979107">+57 3193979107</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
