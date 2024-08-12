import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#001f3f', 
      color: '#ffffff', 
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{
        fontSize: '3rem', 
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#ffffff' 
      }}>
        Rachael Njoki
      </h1>
      <p style={{
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Software Engineer, Fullstack, and Technical Writer
      </p>
    </div>
  );
};

export default HomePage;
