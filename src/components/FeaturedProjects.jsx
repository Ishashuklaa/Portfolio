// src/components/FeaturedProjects.jsx
import React from 'react';
import './FeaturedProjects.css';
import CultureConnect from './CultureConnect.png';
import FarmToTable from './FarmToTable.png';
import Weather from './Weather.png';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="featured-projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={CultureConnect} alt="CultureConnect"/>
            </div>
            <div className="project-info">
              <h3>CultureConnect</h3>
              <p>A platform for cultural exchange and storytelling.</p>
              <a href='https://github.com/Ishashuklaa' className="view-link">View on Github</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
            <img src={FarmToTable} alt="CultureConnect"/>
            </div>
            <div className="project-info">
              <h3>FarmToTable</h3>
              <p>A solution for farmers to sell products directly to consumers.</p>
              <a href='https://github.com/Ishashuklaa/FarmToTable-Website' className="view-link">View on Github</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
            <img src={Weather} alt="CultureConnect"/>
            </div>
            <div className="project-info">
              <h3>Weather-Tracker</h3>
              <p>Worldwide animated weather map, with easy to use layers and precise spot forecast.</p>
              <a href='https://github.com/Ishashuklaa/Weather-Tracker' className="view-link">View on Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
