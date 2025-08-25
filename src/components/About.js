import React from 'react';

const About = () => {
  return (
    <div>
      <div className="section-header">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Who I Am</h3>
                     <p>
             Hi, I'm Kaushal Sharma from Mandawa, Rajasthan. I am currently pursuing my Master of Computer Applications (MCA) final year at Lovely Professional University, Punjab. I completed my Bachelor of Computer Applications (BCA) from S.S Jain Subodh (Autonomous) College, Jaipur, Rajasthan.
           </p>
          <p>
            I'm a multi-tasker, quick learner, and sports enthusiast with a passion for technology, creativity, and continuous growth. My journey in technology started with a curiosity to understand how things work, and it has evolved into a deep passion for creating meaningful solutions.
          </p>
          <p>
            Beyond academics, I'm actively involved in sports and content creation. I believe in maintaining a balance between technical skills and personal development, which helps me approach problems with creativity and discipline.
          </p>
        </div>
        
        <div className="about-image">
          <img src="/kaushal sharma.jpg" alt="About Kaushal Sharma" />
        </div>
      </div>
    </div>
  );
};

export default About;
