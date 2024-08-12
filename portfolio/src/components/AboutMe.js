import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" style={{ backgroundColor: '#001f3f', color: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <img 
          src="/images/profile.jpeg" 
          alt="Profile" 
          style={{ 
            width: '300px',
            height: '300px',
            borderRadius: '50%', 
            marginRight: '20px'
          }} 
        />
        <div>
          <h1>About Me</h1> 
          <p>
            Hello! I'm a junior web developer with a strong enthusiasm for technology and software development.<br />
            I hold a certificate in Software Engineering from Moringa School, where I gained hands-on experience in creating web applications and mastering various development tools.<br />
            I am passionate about coding and eager to contribute my skills to dynamic teams and exciting projects.<br />
            My background includes a solid foundation in both front-end and back-end technologies, and I am always keen to learn and grow in this ever-evolving field.
          </p>
          <a 
            href="https://drive.google.com/file/d/1FQLZ7YjmGGgKnGzea06CsCbBpXy00Iog/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              marginTop: '20px'
            }}
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
