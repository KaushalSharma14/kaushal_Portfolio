import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder App",
      description: "A comprehensive Java Swing application with SQLite database integration for creating professional resumes with PDF export functionality. Features include customizable templates, data persistence, and professional formatting.",
      technologies: ["Java", "Swing", "SQLite", "PDF Export"],
      icon: "fas fa-file-alt"
    },
    {
      title: "Rajasthan Restaurant Website",
      description: "A responsive website showcasing authentic Rajasthani cuisine and culture. Built with modern web technologies, featuring menu management, cultural information, and online ordering system.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: "fas fa-utensils"
    },
    {
      title: "Criminal Record Database",
      description: "A scalable SQL-based record management system for law enforcement agencies. Features include secure data storage, search functionality, and comprehensive reporting capabilities.",
      technologies: ["SQL", "Database Design", "Security", "Reporting"],
      icon: "fas fa-shield-alt"
    },
    {
      title: "Automation Testing (H&M E-commerce)",
      description: "Comprehensive test automation framework using Selenium IDE for H&M e-commerce platform. Covers functionality testing, regression testing, and performance validation.",
      technologies: ["Selenium", "Test Automation", "E-commerce", "QA"],
      icon: "fas fa-robot"
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>Projects I've Built</h2>
        <p>Real-world applications and solutions</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <i className={project.icon} style={{ fontSize: '3rem', color: '#b74b4b', marginBottom: '2rem' }}></i>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
