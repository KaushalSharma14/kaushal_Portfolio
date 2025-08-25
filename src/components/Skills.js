import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Skilled in C++, Java, Python, C with strong problem-solving abilities and algorithmic thinking.",
      icon: "fas fa-code"
    },
    {
      title: "Web Technologies",
      description: "Experienced with HTML, CSS, JavaScript, React for building responsive and modern web applications.",
      icon: "fas fa-globe"
    },
    {
      title: "Databases & Tools",
      description: "Proficient in MySQL, SQLite with understanding of database design and management principles.",
      icon: "fas fa-database"
    },
    {
      title: "Software Engineering",
      description: "Knowledge of SDLC, Agile methodologies, and software testing practices including Selenium.",
      icon: "fas fa-cogs"
    },
    {
      title: "Networking",
      description: "Understanding of computer communication and networking concepts for system integration.",
      icon: "fas fa-network-wired"
    },
    {
      title: "Development Practices",
      description: "Experience with version control, responsive design, and building real-world applications.",
      icon: "fas fa-laptop-code"
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <p>What I bring to the table</p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon} style={{ fontSize: '3rem', color: '#b74b4b', marginBottom: '2rem' }}></i>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
