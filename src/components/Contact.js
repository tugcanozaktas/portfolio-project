import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <h2 className="contact-me">Contact Me</h2>
      <div className="contact-icons-container">
        <a
          href="mailto:tugcanozaktas51@gmail.com"
          className="contact-icon"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/tu%C4%9Fcan-%C3%B6zakta%C5%9F-0210b5267/"
          className="contact-icon"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="tel:+905338211394"
          className="contact-icon"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a
          href="https://github.com/tugcanozaktas"
          className="contact-icon"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </>
  );
};

export default Contact;
