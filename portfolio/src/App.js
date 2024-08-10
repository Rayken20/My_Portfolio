// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// // import AboutMe from './components/AboutMe';
// // import Education from './components/Education';
// // import Experience from './components/Experience';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// import NavBar from './components/NavBar'; // Import the Navbar component
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <NavBar /> {/* Include the Navbar component */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/about-me" element={<AboutMe />} />
//           <Route path="/projects" element={<Projects />} />          
//           <Route path="/education" element={<Education />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const HomePage = () => <div>Home Page</div>;
const AboutMe = () => <div>About Me</div>;
const Projects = () => <div>Projects</div>;
const Contact = () => <div>Contact</div>;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

