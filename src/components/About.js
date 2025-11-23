import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <div className="section-header">
        <h2 className="glow-text">About Me</h2>
        <p className="subtitle">Discover the Developer Behind the Code</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <div className="text-content">
            <h3 className="gradient-text">Who I Am</h3>
            <p className="bio-text">
              Hi, I'm <span className="highlight">Kaushal Sharma</span> from Mandawa, Rajasthan. I am currently pursuing my Master of Computer Applications (MCA) final year at Lovely Professional University, Punjab. I completed my Bachelor of Computer Applications (BCA) from S.S Jain Subodh (Autonomous) College, Jaipur, Rajasthan.
            </p>
            <p className="bio-text">
              I'm a <span className="highlight">multi-tasker</span>, <span className="highlight">quick learner</span>, and <span className="highlight">sports enthusiast</span> with a passion for technology, creativity, and continuous growth. My journey in technology started with a curiosity to understand how things work, and it has evolved into a deep passion for creating meaningful solutions.
            </p>
            <p className="bio-text">
              Beyond academics, I'm actively involved in sports and content creation. I believe in maintaining a balance between technical skills and personal development, which helps me approach problems with creativity and discipline.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Projects</div>
                <div className="stat-label">In Working Mode</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Programming Languages</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image-container">
          <div className="image-wrapper half-photo">
            <div className="image-background">
              <img 
                src={`${process.env.PUBLIC_URL}/2ndkaushal.jpg`} 
                alt="Kaushal Sharma" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${process.env.PUBLIC_URL}/kaushal.jpg`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
