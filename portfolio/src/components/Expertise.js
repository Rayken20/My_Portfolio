import React from 'react';

const Expertise = () => {
  return (
    <section id="expertise" style={{ backgroundColor: '#001f3f', color: '#ffffff' }}>
      <h1>My Expertise</h1> 
      <div style={{ marginBottom: '40px' }}>
        <h2>Frontend Development</h2>
        <p>Skilled in HTML, CSS, JavaScript, and Bootstrap. Over a year of experience in building responsive and dynamic web applications using these technologies.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Backend Development</h2>
        <p>Proficient in Python and Flask for server-side programming. Knowledgeable in SQL, SQLite, and PostgreSQL for database management and design.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>UI/UX Design</h2>
        <p>Passionate about creating intuitive and visually appealing user interfaces. Experience with various UI/UX design principles and best practices.</p>
      </div>
    </section>
  );
};

export default Expertise;
