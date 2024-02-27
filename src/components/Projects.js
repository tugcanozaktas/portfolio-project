import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Facebook Feed Clone",
      description:
        "Just a simple showcase of what I can do with a UI Library. In this case, MUI.",
      demoLink:
        "https://facebook-feed-clone-git-master-tugcan-ozaktass-projects.vercel.app/",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      demoLink: "https://example.com/demo2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      demoLink: "https://example.com/demo3",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      demoLink: "https://example.com/demo4",
    },
    // Add more project objects as needed
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const goToNextProject = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(null);
    }, 500);
  };

  const goToPrevProject = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setDirection(null);
    }, 500);
  };

  return (
    <div id="projects" className="projects-container">
      <div className="project-slider">
        <div
          className={`project ${
            direction === "left" ? "project-animating-left" : ""
          } ${direction === "right" ? "project-animating-right" : ""}`}
        >
          <div className="project-wrapper">
            <h3>{projects[currentProjectIndex].title}</h3>
            <p>{projects[currentProjectIndex].description}</p>
            <a
              href={projects[currentProjectIndex].demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="slider-controls">
        <button className="prev-btn" onClick={goToPrevProject}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next-btn" onClick={goToNextProject}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
