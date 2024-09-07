// src/App.jsx
// import React from 'react';
// import './App.css';
// import AboutMe from './components/AboutMe';
// import FeaturedProjects from './components/FeaturedProjects';
// import ContactMe from './components/ContactMe';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Resume from './components/Resume';
// import myPhoto1 from './assets/myPhoto1.jpg'; 

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <header className="hero-section">
//   <div className="hero-content">
//     <div className="hero-photo">
//       <img src={myPhoto1} className="blend" alt="Isha Shukla" />
//     </div>
//     <div className="hero-text">
//       <h1>Hello, I'm Isha!</h1>
//       <p>Software Developer & Problem Solver</p>
//       <a href="#contact" className="btn">Contact Me</a>
//     </div>
//   </div>
// </header>

//       <AboutMe />
//       <FeaturedProjects />
//       <Resume/>
//       <ContactMe />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import FeaturedProjects from './components/FeaturedProjects';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Education from './components/Education';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Achievements from './components/Achievements';
import myPhoto1 from './assets/myPhoto1.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const rotatingText = ["Software Developer", "Problem Solver", "Creative Thinker"];

const App = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % rotatingText.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-photo">
            <img src={myPhoto1} className="blend" alt="Isha Shukla" />
          </div>
          <div className="hero-text">
            <h1>Hello, I'm Isha!</h1>
            <p>
              <span>{rotatingText[currentText]}</span>
            </p>
            <a href="#contact" className="btn">Contact Me</a>
            <a href="https://drive.google.com/file/d/1FrExoz1yxCK1yWXsu0lmKF9MQF4u7mlw/view?usp=drivesdk" download="Isha_Shukla_Resume.pdf" className="btn">
          Download Resume
        </a>
          </div>
        </div>
      </header>

      <AboutMe />
      <Education/>
      <FeaturedProjects />
      <Achievements/>
      <Resume />
      <HardSkills/>
      <SoftSkills/>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
