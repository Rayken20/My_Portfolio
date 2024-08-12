import React from 'react';

const Experience = () => {
  return (
    <section id="experience" style={{ backgroundColor: '#001f3f', color: '#ffffff' }}>
      <h1>Experience</h1>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', textAlign: 'left', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h2>Junior Software Engineer</h2>
            <p><strong>Company:</strong> UvoCorp - 2023-present</p>
            <p>As a Junior Software Engineer at UvoCorp, I have been involved in various projects that required both front-end and back-end development skills. My responsibilities included coding, debugging, and collaborating with the team to deliver high-quality software solutions.</p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajDnBfuFZz5bQNucGFhEsDpx4nNqgHoo3CA&s" 
            alt="Software Engineer" 
            style={{ width: '300px', height: '200px', borderRadius: '10px', marginLeft: '20px' }} 
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h2>Technical Research Writer</h2>
            <p><strong>Company:</strong> UvoCorp - 2018-2023</p>
            <p>During my time as an Academic Research Writer, I focused on creating comprehensive research documents and papers. This role involved extensive research, writing, and editing to produce high-quality academic content.</p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kcfZjE63i7chGP5nzqlU-mFDSve0aD8h7A&s" 
            alt="Academic Research Writer" 
            style={{ width: '300px', height: '200px', borderRadius: '10px', marginLeft: '20px' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
