import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
          <Nav.Link as={Link} to="about" smooth={true} duration={500}>About Me</Nav.Link>
          <Nav.Link as={Link} to="education" smooth={true} duration={500}>Education</Nav.Link>
          <Nav.Link as={Link} to="experience" smooth={true} duration={500}>Experience</Nav.Link>
          <Nav.Link as={Link} to="expertise" smooth={true} duration={500}>Expertise</Nav.Link>
          <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
