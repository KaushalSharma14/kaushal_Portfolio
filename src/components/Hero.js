import React from 'react';

const Hero = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src="/kaushal sharma.jpg" alt="Kaushal Sharma" />
      </div>
      <div className="home-content">
        <h1>Hi, It's <span>Kaushal Sharma</span></h1>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>
          MCA Student | Developer | Sports Enthusiast from Mandawa, Rajasthan. 
          Currently pursuing my Master of Computer Applications final year at Lovely Professional University, Punjab. 
          I'm a multi-tasker, quick learner, and passionate about technology, creativity, and continuous growth.
        </p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/kaushal-sharma-sde" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/KaushalSharma14" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/kawshal_sharma/?igsh=aGN6emptd3d0eHF2&utm_source=qr#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
