import React, { useEffect, useRef } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the section is visible
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-me" ref={aboutMeRef}>
      <div className="container">
        <h2>A Few Words About Me</h2>
        <p>
        Hi, I'm Isha Shukla, a passionate web developer with a focus on creating engaging user experiences. I am proficient in HTML, CSS, React, Node.js, and MongoDB, and I enjoy bringing creative ideas to life through code. Currently, I'm working on two exciting projects: CultureConnect, a platform fostering cultural exchange, and FarmToTable, a solution for sustainable food sourcing.

Beyond coding, I have a deep interest in the arts, including dance, singing, painting, and chess, where I have competed and won awards. I love blending creativity with technology and continuously challenge myself through coding contests on platforms like LeetCode and GeeksforGeeks.

I'm always eager to learn, grow, and contribute to impactful projects!


        </p>
      </div>
    </section>
  );
};

export default AboutMe;
