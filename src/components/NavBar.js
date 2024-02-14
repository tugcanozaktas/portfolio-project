import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo">
          Tuğcan Özaktaş
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-links"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
