import React from 'react';

const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header>
      <div className="logo" onClick={() => scrollToSection('home')}>
        KS
      </div>
      
      <nav>
        <a 
          className={activeSection === 'home' ? 'active' : ''} 
          onClick={() => scrollToSection('home')}
        >
          Home
        </a>
        <a 
          className={activeSection === 'about' ? 'active' : ''} 
          onClick={() => scrollToSection('about')}
        >
          About
        </a>
        <a 
          className={activeSection === 'skills' ? 'active' : ''} 
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </a>
        <a 
          className={activeSection === 'projects' ? 'active' : ''} 
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </a>
        <a 
          className={activeSection === 'resume' ? 'active' : ''} 
          onClick={() => scrollToSection('resume')}
        >
          Resume
        </a>
        <a 
          className={activeSection === 'certifications' ? 'active' : ''} 
          onClick={() => scrollToSection('certifications')}
        >
          Certifications
        </a>
        <a 
          className={activeSection === 'gallery' ? 'active' : ''} 
          onClick={() => scrollToSection('gallery')}
        >
          Gallery
        </a>
        <a 
          className={activeSection === 'recognition' ? 'active' : ''} 
          onClick={() => scrollToSection('recognition')}
        >
          Recognition
        </a>
        <a 
          className={activeSection === 'achievements' ? 'active' : ''} 
          onClick={() => scrollToSection('achievements')}
        >
          Achievements
        </a>
        <a 
          className={activeSection === 'contact' ? 'active' : ''} 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
