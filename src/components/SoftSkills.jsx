import React, { useEffect } from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this import

const SoftSkills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const skillItems = document.querySelectorAll('.skill-item');

    if (skillItems.length > 0) {
      skillItems.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <h2>Soft Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <i className="skill-icon fas fa-comments"></i>
          <span className="skill-name">Communication</span>
        </div>
        <div className="skill-item">
          <i className="skill-icon fas fa-users"></i>
          <span className="skill-name">Teamwork</span>
        </div>
        <div className="skill-item">
          <i className="skill-icon fas fa-lightbulb"></i>
          <span className="skill-name">Problem Solving</span>
        </div>
        <div className="skill-item">
          <i className="skill-icon fas fa-brain"></i>
          <span className="skill-name">Critical Thinking</span>
        </div>
        <div className="skill-item">
          <i className="skill-icon fas fa-artstation"></i> 
          <span className="skill-name">Creativity</span>
        </div>
        <div className="skill-item">
          <i className="skill-icon fas fa-tachometer-alt"></i> 
          <span className="skill-name">Adaptability</span>
        </div>
        {/* <div className="skill-item">
          <i className="skill-icon fas fa-trophy"></i> 
          <span className="skill-name">Motivation</span>
        </div> */}
        <div className="skill-item">
          <i className="skill-icon fas fa-clock"></i>
          <span className="skill-name">Time Management</span>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
