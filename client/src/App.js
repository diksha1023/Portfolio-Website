import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import About from "./Components/About/About"
import TechStack from './Components/TechStack/TechStack';

const App = () => {
  return (
    //<h1 className="btn btn-success">Hello React</h1>
    // <div>App</div>
    <>
      <Sidebar />
      <About />
      <TechStack />
    </>

  )
}

export default App