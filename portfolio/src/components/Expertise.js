import React from 'react';

const Card = ({ title, details }) => {
  return (
    <div style={{ width: '300px', height: 'auto', borderRadius: '10px', marginLeft: '20px', backgroundColor: '#003f5f', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#ffffff', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      {title && <p style={{ margin: '0', fontWeight: 'bold' }}>{title}</p>}
      {details.map((detail, index) => (
        <p key={index} style={{ margin: '0' }}>{detail}</p>
      ))}
    </div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" style={{ backgroundColor: '#001f3f', color: '#ffffff', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>My Expertise</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>Frontend Development</h2>
            <p>Skilled in HTML, CSS, JavaScript, and Bootstrap. Can build responsive and dynamic web applications using these technologies.</p>
          </div>
          <Card
            title="Frontend Development"
            details={[
              'HTML, CSS, JavaScript, Bootstrap',
              'Responsive and dynamic web applications'
            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>Backend Development</h2>
            <p>Proficient in Python and Flask for server-side programming. Knowledgeable in SQL, SQLite, and PostgreSQL for database management and design.</p>
          </div>
          <Card
            title="Backend Development"
            details={[
              'Python, Flask',
              'SQL, SQLite, PostgreSQL',
              'Server-side programming and database management'
            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>UI/UX Design</h2>
            <p>Passionate about creating intuitive and visually appealing user interfaces. Experience with various UI/UX design principles and best practices.</p>
          </div>
          <Card
            title="UI/UX Design"
            details={[
              'UI/UX design principles',
              'Creating intuitive and visually appealing interfaces'
            ]}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Expertise;
