import React from 'react';

const Education = () => {
  return (
    <section id="education" style={{ backgroundColor: '#001f3f', color: '#ffffff' }}>
      <h1>Education</h1> 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', textAlign: 'left', width: '100%' }}>
          <div style={{ flex: 1, padding: '0 10px' }}>
            <h2>Bachelor of Business Management</h2>
            <p><strong>Institution:</strong> Moi University - 2017</p>
            <p>This degree provided me with a comprehensive understanding of business principles and practices, enhancing my analytical and managerial skills.</p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YDVIh4XIsX9erMu4A5RfWZCC8SAV4PbWzg&s" 
            alt="Moi University" 
            style={{ width: '300px', height: '150px', borderRadius: '10px', marginLeft: '20px' }} 
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left', width: '100%' }}>
          <div style={{ flex: 1, padding: '0 10px' }}> 
            <h2>Certificate in Software Engineering</h2>
            <p><strong>Institution:</strong> Moringa School - 2024</p>
            <p>This certificate equipped me with practical skills in software development, including hands-on experience in various technologies and methodologies relevant to modern web development.</p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5s1THkrUnACBlmjBhJ0i8LdFNBBRaS0ZnQ&s" 
            alt="Moringa School" 
            style={{ width: '300px', height: '150px', borderRadius: '10px', marginLeft: '20px' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
