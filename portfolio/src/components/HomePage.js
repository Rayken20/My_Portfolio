import React from 'react';

const HomePage = () => {
  return (
    <section id="home" style={{
      backgroundColor: '#001f3f',
      color: '#ffffff',
      padding: '20px 10px', // Reduced padding for a smaller height
      minHeight: '80vh', // Reduced minimum height to make the page shorter
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%', // Ensure it takes up full width of the section
        textAlign: 'left',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <div style={{ 
          flex: '1', 
          padding: '20px', 
          maxWidth: '600px' 
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Rachael Njoki</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Software Engineer, Fullstack, and Technical Writer</p>
        </div>
        <img 
          src="/images/profile.jpeg" 
          alt="Profile" 
          style={{
            width: '250px', // Adjusted image width
            height: '250px', // Adjusted image height
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            margin: '20px',
          }} 
        />
      </div>
    </section>
  );
};

export default HomePage;
