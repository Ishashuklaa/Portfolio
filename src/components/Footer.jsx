// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/isshaa____/" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* <a href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a> */}
        <a href="https://www.linkedin.com/in/isha-shukla-792404287/" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Ishashuklaa" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Isha Shukla. All rights reserved. | Designed by Isha Shukla</p>
      </div>
    </footer>
  );
};

export default Footer;
