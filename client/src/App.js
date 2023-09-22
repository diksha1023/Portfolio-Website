import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import About from "./Components/About/About"
import TechStack from './Components/TechStack/TechStack';
import Project from './Components/Projects/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';

import ScrollToTop from "react-scroll-to-top";
import "./App.css";

import NavbarMobileView from './Components/Sidebar/NavbarMobileView';

const App = () => {
  return (
    //<h1 className="btn btn-success">Hello React</h1>
    // <div>App</div>
    <>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Certifications />
      <Contact />

      <ScrollToTop
        smooth={true}
        top="20"
        color='white'
        height='30'
        width='20'
        style={{ borderRadius: "20px", backgroundColor: "#38004c" }} />
    </>

  )
}

export default App