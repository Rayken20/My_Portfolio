import React from 'react';

const Contact = () => {
  return (
    <div style={{
      backgroundColor: '#001f3f', 
      color: '#f5f5f5', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center' 
    }}>
      <h1 style={{ color: '#ffffff' }}>Contact</h1> 
      <p>LinkedIn: <a href="https://www.linkedin.com/in/rachael-njoki-66b9b8115/" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f5f5' }}>Rachael Njoki on LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/Rayken20" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f5f5' }}>Rayken20 on GitHub</a></p>
      <p>Phone: +254707478399</p>
      <p>Email: <a href="mailto:njoki.raychael@gmail.com" style={{ color: '#f5f5f5' }}>njoki.raychael@gmail.com</a></p>
    </div>
  );
};

export default Contact;
