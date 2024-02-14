import React from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a to="/" className="navbar-logo">
          Tuğcan Özaktaş
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="projects" className="nav-links">Projects</a>
          </li>
          <li href="about" className="nav-item">
            <a className="nav-links">About</a>
          </li>
          <li href="contact" className="nav-item">
            <a className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
