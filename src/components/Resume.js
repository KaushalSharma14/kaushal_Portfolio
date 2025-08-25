import React from 'react';

const Resume = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kaushal_Sharma_Resume_Updated.pdf';
    link.download = 'Kaushal_Sharma_Resume_Updated.pdf';
    link.click();
  };

  return (
    <div>
      <div className="section-header">
        <h2>Resume</h2>
        <p>Download my detailed resume</p>
      </div>
      
      <div className="resume-content">
        <div className="resume-info">
          <h3>Professional Summary</h3>
          <p>
            MCA Final Year student with expertise in multiple programming languages, 
            web technologies, and software engineering practices. Experienced in building 
            real-world applications and responsive websites.
          </p>
          
          <div className="resume-highlights">
            <div className="highlight-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h4>Education</h4>
                <p>Master of Computer Applications (MCA) - Lovely Professional University</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <i className="fas fa-code"></i>
              <div>
                <h4>Programming Languages</h4>
                <p>C++, Java, Python, C, JavaScript, React</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <i className="fas fa-database"></i>
              <div>
                <h4>Databases & Tools</h4>
                <p>MySQL, SQLite, SDLC, Agile, Selenium</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-download">
          <div className="download-card">
            <i className="fas fa-file-pdf"></i>
            <h3>Download Resume</h3>
            <p>Get my complete professional background, skills, and project details</p>
            <button className="btn" onClick={handleDownloadResume}>
              <i className="fas fa-download"></i>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
