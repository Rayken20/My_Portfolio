import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img 
        src="/images/profile.jpeg" 
        alt="Profile" 
        style={{ width: '200px', borderRadius: '50%' }} 
      />
      <p>[Your detailed background, experience, and motivations]</p>
    </div>
  );
};

export default AboutMe;
