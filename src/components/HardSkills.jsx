import React, { useEffect } from 'react';
import './Skills.css';

const HardSkills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const progressCircle = entry.target.querySelector('.circle-progress');
          const percentage = entry.target.getAttribute('data-percentage');
          
          // Only update style if progressCircle is found
          if (progressCircle) {
            const offset = 440 - (440 * percentage) / 100;
            progressCircle.style.strokeDashoffset = offset;
          }
        }
      });
    });

    const skillItems = document.querySelectorAll('.skill-item');

    // Only observe if skillItems exist
    if (skillItems.length > 0) {
      skillItems.forEach((item) => observer.observe(item));
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <h2>Hard Skills</h2>
      <div className="skills-container">
      <div className="skill-item" data-percentage="90">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">95%</div>
          </div>
          <span className="skill-name">Java</span>
        </div>
      
        <div className="skill-item" data-percentage="90">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">90%</div>
          </div>
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="skill-item" data-percentage="85">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">85%</div>
          </div>
          <span className="skill-name">React</span>
        </div>
        <div className="skill-item" data-percentage="75">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">75%</div>
          </div>
          <span className="skill-name">Node.js</span>
        </div>
        {/* <div className="skill-item" data-percentage="75">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">75%</div>
          </div>
          <span className="skill-name">Express.js</span>
        </div> */}
        <div className="skill-item" data-percentage="80">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">80%</div>
          </div>
          <span className="skill-name">SQL</span>
        </div>
        <div className="skill-item" data-percentage="60">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">60%</div>
          </div>
          <span className="skill-name">Python</span>
        </div>
        <div className="skill-item" data-percentage="70">
          <div className="circular-progress">
            <svg>
              <circle cx="60" cy="60" r="55" className="circle-background"></circle>
              <circle cx="60" cy="60" r="55" className="circle-progress"></circle>
            </svg>
            <div className="skill-percentage">70%</div>
          </div>
          <span className="skill-name">MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
