import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h3>Education</h3>
        <div className="education-list">
          <div className="education-item">
            <p>Bachelor of Science in Computer Science</p>
            <span>Barkatullah University,Bhopal, 2019-2022</span>
          </div>
          <div className="education-item">
            <p>Masters Of Computer Application
            </p>
            <span>Maulana Azad National Institute Of Technology,Bhopal, 2023-2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
