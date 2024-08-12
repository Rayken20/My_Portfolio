import React from 'react';

const Projects = () => {
  return (
    <div style={{
      backgroundColor: '#001f3f', 
      color: '#ffffff', 
      padding: '20px',
      minHeight: '100vh',
      margin: 0,
    }}>
      <div style={{
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h1 style={{ color: '#ffffff' }}>My Projects</h1> 
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '20px',
            textAlign: 'left',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>
              <h2>The Rayken's</h2>
              <p>Description: A hotel website that allows clients to choose the menu and add ingredients they would like their meals to be prepared with.</p>
              <p>Technologies Used: JavaScript, React, PostgreSQL, Flask, Python</p>
              <a href="https://github.com/Rayken20/The_Raykens" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View on GitHub</a>
            </div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTL3CSiHSJLdUkQAEzfRTqXC1yKTruBBUY3A&s" 
              alt="The Rayken's" 
              style={{
                width: '300px', 
                height: '200px', 
                borderRadius: '10px',
              }} 
            />
          </li>
          <li style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '20px',
            textAlign: 'left',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRvGS0nfOTwcxT70s40bJzw6FUc2OweoUKw&s" 
              alt="Movie Ticketing Platform" 
              style={{
                width: '300px', 
                height: '200px', 
                borderRadius: '10px',
                marginRight: '20px',
              }} 
            />
            <div style={{ flex: 1 }}>
              <h2>Movie Ticketing Platform</h2>
              <p>Description: A movie ticketing platform where users can browse movies, theaters, pay for tickets, and book seats.</p>
              <p>Technologies Used: JavaScript, React, PostgreSQL, Flask, Python</p>
              <a href="https://movie-ticketing-reviewing-system-client.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View Platform</a> | <a href="https://github.com/Rayken20/movie-ticketing-reviewing-system-client" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50' }}>View on GitHub</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
