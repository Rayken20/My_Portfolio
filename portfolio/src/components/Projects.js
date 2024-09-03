import React from 'react';

const Card = ({ title, details, imageUrl }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      backgroundColor: '#003f5f',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      color: '#ffffff',
      width: '100%',
      maxWidth: '600px',
      textAlign: 'left',
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2>{title}</h2>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          style={{
            width: '100%',  // Make image take full width of its container
            height: 'auto', // Maintain aspect ratio
            maxWidth: '300px', // Cap maximum width
            borderRadius: '10px',
            marginTop: '20px',
            marginLeft: '20px',
          }} 
        />
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{
      backgroundColor: '#001f3f', 
      color: '#ffffff', 
      padding: '40px 20px',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h1 style={{ color: '#ffffff', marginBottom: '30px' }}>My Projects</h1> 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card
            title="The Rayken's"
            details={[
              "Description: A hotel website that allows clients to choose the menu and add ingredients they would like their meals to be prepared with.",
              "Technologies Used: JavaScript, React, PostgreSQL, Flask, Python",
              <a href="https://the-raykens.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View Platform</a>,
              <a href="https://github.com/Rayken20/The_Raykens" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View on GitHub</a>
            ]}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTL3CSiHSJLdUkQAEzfRTqXC1yKTruBBUY3A&s"
          />
          <Card
            title="Movie Ticketing Platform"
            details={[
              "Description: A movie ticketing platform where users can browse movies, theaters, pay for tickets, and book seats.",
              "Technologies Used: JavaScript, React, SQLite, Flask, Python",
              <a href="https://movie-ticketing-reviewing-system-client.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View Platform</a>,
              <a href="https://github.com/Rayken20/movie-ticketing-reviewing-system-client" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View on GitHub</a>
            ]}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRvGS0nfOTwcxT70s40bJzw6FUc2OweoUKw&s"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
