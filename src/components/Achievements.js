import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Ranked in the Top 10% of students (Dean's list) for academic & extracurricular excellence at Lovely Professional University.",
      icon: "fas fa-trophy"
    },
    {
      title: "Sports Champion",
      description: "6 Gold, 2 Silver, 1 Bronze in athletics, cricket runner-up, and 2-time gold medalist in dance competitions.",
      icon: "fas fa-medal"
    },
    {
      title: "Content Creator",
      description: "Active photography & videography creator on Instagram & YouTube, sharing stories through visual media and creative content.",
      icon: "fas fa-camera"
    },
    {
      title: "Leadership & Team Spirit",
      description: "Demonstrated leadership qualities through sports participation, team collaboration, and maintaining discipline in all endeavors.",
      icon: "fas fa-users"
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>Achievements</h2>
        <p>Recognition of excellence and dedication</p>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <i className={achievement.icon} style={{ fontSize: '3rem', color: '#b74b4b', marginBottom: '2rem' }}></i>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
