import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h2>My Resume</h2>
        <p>Download my resume to learn more about my experience and skills.</p>
        <a href="https://drive.google.com/file/d/1FrExoz1yxCK1yWXsu0lmKF9MQF4u7mlw/view?usp=drivesdk" download="Isha_Shukla_Resume.pdf" className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
