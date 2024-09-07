// src/components/ContactMe.jsx
import React from 'react';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <section id="contact" className="contact-me">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> 
            Email: <a href="mailto:ishashukla2404@gmail.com">ishashukla2404@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 
            Phone: <a href="tel:+123456789">xxxxxxxxxx</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} /> 
            GitHub: <a href="https://github.com/Ishashuklaa" target="_blank" rel="noopener noreferrer">github.com/Ishashuklaa</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> 
            Linkedin: <a href="https://www.linkedin.com/in/isha-shukla-792404287/" target="_blank" rel="noopener noreferrer">linkedin.com/in/isha-shukla-792404287/</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
