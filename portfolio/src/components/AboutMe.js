import React from 'react';

const AboutMe = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <img 
        src="/images/profile.jpeg" 
        alt="Profile" 
        style={{ width: '200px', height: '200px', borderRadius: '50%', marginRight: '20px' }} 
      />
      <div>
        <h1>About Me</h1>
        <p>
          Hello! I'm a junior web developer with a strong enthusiasm for technology and software development.<br />
          I hold a certificate in Software Engineering from Moringa School, where I gained hands-on experience in creating web applications and mastering various development tools.<br />
          I am passionate about coding and eager to contribute my skills to dynamic teams and exciting projects.<br />
          My background includes a solid foundation in both front-end and back-end technologies, and I am always keen to learn and grow in this ever-evolving field.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
