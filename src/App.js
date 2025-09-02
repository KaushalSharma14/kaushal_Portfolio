import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Recognition from './components/Recognition';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        AOS.default.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      } catch (error) {
        console.log('AOS not available');
      }
    };

    initAOS();
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <ScrollProgress />
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
      />
      
      <main>
        <section id="home" data-aos="fade-up">
          <Hero />
        </section>
        
        <section id="about" data-aos="fade-up">
          <About />
        </section>
        
        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>
        
        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>
        
        <section id="resume" data-aos="fade-up">
          <Resume />
        </section>
        
        <section id="certifications" data-aos="fade-up">
          <Certifications />
        </section>
        
        <section id="gallery" data-aos="fade-up">
          <Gallery />
        </section>
        
        <section id="recognition" data-aos="fade-up">
          <Recognition />
        </section>
        
        <section id="achievements" data-aos="fade-up">
          <Achievements />
        </section>
        
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
