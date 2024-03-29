import React, {useState, createContext} from 'react';
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


export const  ThemeContext = createContext(null);


const App = () => {

  const [theme, setTheme] = useState("light");

  const changeTheme = ()=>{
    setTheme((prev) => (prev === "light" ? "dark":"light"));
  }

  return (
    //<h1 className="btn btn-success">Hello React</h1>
    // <div>App</div>
    <ThemeContext.Provider value={{theme, changeTheme}}>
      
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme} />
        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
        <Certifications />
        <Contact />
      </div>
      
      

      <ScrollToTop
        smooth={true}
        top="20"
        color='white'
        height='30'
        width='20'
        style={{ borderRadius: "20px", backgroundColor: "#38004c" }} />
    </ThemeContext.Provider>

  )
}

export default App