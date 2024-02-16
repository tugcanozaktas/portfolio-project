import React from "react";
import "../styles/App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Contact from "./Contact";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <Navbar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>

      <button className="scroll-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
}

export default App;
