import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar /> 
      <div className="section" id="home">
        <HomePage />
      </div>
      <div className="section" id="about">
        <AboutMe />
      </div>
      <div className="section" id="education">
        <Education />
      </div>
      <div className="section" id="experience">
        <Experience />
      </div>
      <div className="section" id="expertise">
        <Expertise />
      </div>
      <div className="section" id="projects">
        <Projects />
      </div>
      <div className="section" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
