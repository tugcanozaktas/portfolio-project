import { faCloud } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/About.css"

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="skills">
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3} className="skill-icon css" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} className="skill-icon react" />
          <p>React</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} className="skill-icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCloud} className="skill-icon backend" />
          <p>REST API</p>
        </div>
      </div>
    </div>
  );
};

export default About;
