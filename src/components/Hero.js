import React from 'react';

const Hero = () => {

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Kaushal Sharma</h1>
      
          <p className="hero-description">
            MCA Final Year student at Lovely Professional University, passionate about building reliable, user-focused software.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-primary">
              <span>View Work</span>
            </a>
            <a href="#contact" className="cta-secondary">
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/Kaushal Sharma.jpg`} 
              alt="Kaushal Sharma" 
              className="hero-profile"
              onError={(e) => {
                e.target.onerror = null;
                // Try with URL encoded version
                if (!e.target.src.includes('%20')) {
                  e.target.src = `${process.env.PUBLIC_URL}/Kaushal%20Sharma.jpg`;
                } else {
                  // Fallback to alternative image
                  e.target.src = `${process.env.PUBLIC_URL}/kaushal.jpg`;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
