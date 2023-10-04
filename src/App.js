import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import SoftSkills from "./Components/SoftSkills/SoftSkills";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <SoftSkills/>
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;
