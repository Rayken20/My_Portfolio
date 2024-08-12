import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <div className="container"> {/* Bootstrap container to align width */}
        <ul style={styles.navList}>
          <li><Link to="home" smooth={true} duration={500} style={styles.navLink}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} style={styles.navLink}>About Me</Link></li>
          <li><Link to="education" smooth={true} duration={500} style={styles.navLink}>Education</Link></li>
          <li><Link to="experience" smooth={true} duration={500} style={styles.navLink}>Experience</Link></li>
          <li><Link to="expertise" smooth={true} duration={500} style={styles.navLink}>Expertise</Link></li>
          <li><Link to="projects" smooth={true} duration={500} style={styles.navLink}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} style={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#001f3f', // Navy blue background
    padding: '10px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%', // Full width
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#ffffff', // White text color
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default NavBar;
