import React from 'react';

const Resume = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Kaushal_Sharma_Resume_.pdf`;
    link.download = 'Kaushal_Sharma_Resume_.pdf';
    link.click();
  };

  return (
    <div className="resume-section">
      <div className="section-header">
        <h2 className="glow-text">Resume</h2>
        <p className="subtitle">Download my detailed professional background</p>
      </div>
      
      <div className="resume-content">
        <div className="resume-info">
          <h3 className="gradient-text">Professional Summary</h3>
          <p className="summary-text">
            MCA Final Year student with expertise in multiple programming languages, 
            web technologies, and software engineering practices. Experienced in building 
            real-world applications and responsive websites.
          </p>
          
          <div className="resume-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="highlight-content">
                <h4>Education</h4>
                <p>Master of Computer Applications (MCA) - Lovely Professional University</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="highlight-content">
                <h4>Programming Languages</h4>
                <p>C++, Java, Python, C, JavaScript, React</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="highlight-content">
                <h4>Databases & Tools</h4>
                <p>MySQL, SQLite, SDLC, Agile, Selenium</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-download">
          <div className="download-card">
            <div className="card-header">
              <div className="pdf-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h3>Download Resume</h3>
            </div>
            <p className="card-description">Get my complete professional background, skills, and project details in a comprehensive PDF format</p>
            <button className="download-btn" onClick={handleDownloadResume}>
              <i className="fas fa-download"></i>
              <span>Download PDF</span>
            </button>
            <div className="file-info">
              <span className="file-size">PDF • 105 KB</span>
              <span className="file-updated">Updated: Sep 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
