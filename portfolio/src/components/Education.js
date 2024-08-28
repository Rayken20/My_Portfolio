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

const Education = () => {
  return (
    <section id="education" style={{ backgroundColor: '#001f3f', color: '#ffffff', padding: '40px 20px', marginBottom: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Education</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>           
            <h2>Bachelor of Business Management</h2>
            <p>This degree provided me with a comprehensive understanding of business principles and practices, enhancing my analytical and managerial skills.</p>
          </div>
          <Card
            title="Moi University"
            details={[
              "2017",
              "Eldoret",
            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', padding: '20px', maxWidth: '600px' }}>
            <h2>Certificate in Software Engineering</h2>
            <p>This certificate equipped me with practical skills in software development, including hands-on experience in various technologies and methodologies relevant to modern web development.</p>
          </div>
          <Card
            title="Moringa School"            
            details={[
              "Nov 2023 - June 2024",
              'Nairobi, Kenya'              
            ]}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Education;
