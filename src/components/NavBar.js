import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {menuOpen ? (
        <div className="navbar-container">
          <button
            type="button"
            onClick={handleMenuClose}
            className="menu-open-icon"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <Link
            onClick={handleMenuClose}
            to="home"
            smooth={true}
            duration={500}
            className="navbar-logo"
          >
            Tuğcan Özaktaş
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                onClick={handleMenuClose}
                to="home"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClose}
                to="projects"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClose}
                to="about"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleMenuClose}
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
      ) : (
        <button
          type="button"
          onClick={handleMenuOpen}
          className="menu-open-icon"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
