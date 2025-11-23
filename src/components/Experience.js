import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [daysWorked, setDaysWorked] = useState(0);

  useEffect(() => {
    // Calculate days from October 26, 2025
    const startDate = new Date('2025-10-26');
    const today = new Date();
    
    // Calculate difference in days
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setDaysWorked(diffDays);
  }, []);

  const technologies = [
    { name: 'Excel', icon: 'fas fa-file-excel' },
    { name: 'Salesforce', icon: 'fab fa-salesforce' },
    { name: 'Gigya', icon: 'fas fa-users' },
    { name: 'Power BI', icon: 'fas fa-chart-bar' },
    { name: 'Formulas', icon: 'fas fa-calculator' }
  ];

  return (
    <div className="experience-section">
      <div className="section-header">
        <h2 className="glow-text">Professional Experience</h2>
        <p className="subtitle">Building expertise in data management and analytics</p>
      </div>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo-container">
              <div className="company-logo">
                <img 
                  src={`${process.env.PUBLIC_URL}/tech-mahindra-logo.png`} 
                  alt="Tech Mahindra Logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="logo-placeholder" style={{display: 'none'}}>
                  <i className="fas fa-building"></i>
                  <span>Tech Mahindra</span>
                </div>
              </div>
            </div>
            
            <div className="experience-info">
              <h3 className="company-name">Tech Mahindra</h3>
              <p className="job-title">Associate Analyst</p>
              <p className="job-location">
                <i className="fas fa-map-marker-alt"></i>
                Hyderabad, India
              </p>
              <div className="date-badge">
                <i className="fas fa-calendar-alt"></i>
                <span>Started: October 26, 2025</span>
              </div>
            </div>
          </div>

          <div className="experience-stats">
            <div className="day-counter-card">
              <div className="counter-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="counter-content">
                <div className="counter-number">{daysWorked}</div>
                <div className="counter-label">Days of Experience</div>
                <div className="counter-subtitle">Growing every day!</div>
              </div>
            </div>
          </div>

          <div className="experience-details">
            <div className="role-description">
              <h4>
                <i className="fas fa-briefcase"></i>
                Role & Responsibilities
              </h4>
              <p>
                Working as a <strong>Data Steward</strong>, I manage and maintain data quality, 
                ensuring accuracy and consistency across various platforms. My work involves 
                data analysis, validation, and reporting using advanced tools and techniques.
              </p>
            </div>

            <div className="technologies-used">
              <h4>
                <i className="fas fa-tools"></i>
                Technologies & Tools
              </h4>
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-tag">
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-photo-section">
            <div className="photo-placeholder">
              <i className="fas fa-camera"></i>
              <p>Work Photo</p>
              <span>Add your workplace photo here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

