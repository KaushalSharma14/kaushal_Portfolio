import React from 'react';

const Recognition = () => {
  const recognitions = [
    {
      id: 1,
      title: "Top 10% Dean's List",
      description: "Academic excellence and outstanding performance",
      icon: "fas fa-graduation-cap",
      color: "#b74b4b"
    },
    {
      id: 2,
      title: "Sports Champion",
      description: "6 Gold, 2 Silver, 1 Bronze in athletics",
      icon: "fas fa-trophy",
      color: "#ffd700"
    },
    {
      id: 3,
      title: "Content Creator",
      description: "Photography & videography on Instagram & YouTube",
      icon: "fas fa-camera",
      color: "#e91e63"
    },
    {
      id: 4,
      title: "Dance Gold Medalist",
      description: "2-time gold medalist in dance competitions",
      icon: "fas fa-music",
      color: "#9c27b0"
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>Recognition & Achievements</h2>
        <p>Highlights of my journey and accomplishments</p>
      </div>
      
      <div className="recognition-strip">
        {recognitions.map((recognition) => (
          <div key={recognition.id} className="recognition-item">
            <div className="recognition-icon" style={{ color: recognition.color }}>
              <i className={recognition.icon}></i>
            </div>
            <div className="recognition-content">
              <h3>{recognition.title}</h3>
              <p>{recognition.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="achievement-highlights">
        <div className="highlight-card academic">
          <div className="highlight-header">
            <i className="fas fa-medal"></i>
            <h3>Academic Excellence</h3>
          </div>
          <ul>
            <li>Top 10% Dean's List - Lovely Professional University</li>
            <li>Consistent academic performance throughout MCA</li>
            <li>Active participation in technical events and workshops</li>
          </ul>
        </div>

        <div className="highlight-card sports">
          <div className="highlight-header">
            <i className="fas fa-running"></i>
            <h3>Sports Achievements</h3>
          </div>
          <ul>
            <li><strong>Athletics:</strong> 6 Gold, 2 Silver, 1 Bronze medals</li>
            <li><strong>Cricket:</strong> Runner-up in university tournaments</li>
            <li><strong>Dance:</strong> 2-time gold medalist</li>
          </ul>
        </div>

        <div className="highlight-card creative">
          <div className="highlight-header">
            <i className="fas fa-palette"></i>
            <h3>Creative Excellence</h3>
          </div>
          <ul>
            <li>Photography portfolio on Instagram</li>
            <li>Videography content on YouTube</li>
            <li>Professional photo and video editing skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
