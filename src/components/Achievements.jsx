import React, { useState } from 'react';
import './Achievements.css'; 
import Amazon from './Amazon.jpg';
import IBM from './IBM.jpg';

const Achievements = () => {
    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleMouseEnter = (src) => {
        setFullScreenImage(src);
    };

    const handleMouseLeave = () => {
        setFullScreenImage(null);
    };

    return (
        <>
            <section className="achievements-section">
                <h1>Certificates</h1>
                <div className="achievements-container">
                    <div 
                        className="achievement-item"
                        onMouseEnter={() => handleMouseEnter('images/certificate1.jpg')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={IBM} alt="Certificate 1" />
                        <div className="achievement-details">
                            <h3>Certificate Of Internship</h3>
                            <p>Successfully completed 6 weeks of the IBM SkillsBuild Summer Internship Program with CSBox on Front-end Web Development.</p>
                        </div>
                    </div>
                    <div 
                        className="achievement-item"
                        onMouseEnter={() => handleMouseEnter('images/certificate2.jpg')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={Amazon} alt="Certificate 2" />
                        <div className="achievement-details">
                            <h3>Certificate Of Participation</h3>
                            <p>Participated in the coding round of the HackOn With Amazon - Season 4 organised by the Amazon.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            {fullScreenImage && (
                <div className="full-screen-image" onClick={handleMouseLeave}>
                    <img src={fullScreenImage} alt="Full Screen" />
                </div>
            )}
        </>
    );
};

export default Achievements;
