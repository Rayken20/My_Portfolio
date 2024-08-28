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

const Experience = () => {
  return (
    <section id="experience" style={{ backgroundColor: '#001f3f', color: '#ffffff', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Experience</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>Junior Software Engineer</h2>            
            <p>As a Junior Software Engineer at UvoCorp, I have been involved in various projects that required both front-end and back-end development skills. My responsibilities included coding, debugging, and collaborating with the team to deliver high-quality software solutions.</p>
          </div>
          <Card
            title="UvoCorp Ltd."
            details={[
              '2023-present'                       
              
            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>Technical Research Writer</h2>            
            <p>During my time as an Academic Research Writer, I focused on creating comprehensive research documents and papers. This role involved extensive research, writing, and editing to produce high-quality academic content.</p>
          </div>
          <Card
            title="UvoCorp"
            details={[
              '2018-2023'             
              
            ]}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
