import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 style={{ color: "#fff" }}>Hi, I'm Tuğcan Özaktaş</h1>
          <p style={{ color: "#fff" }}>
            I'm a full-stack developer passionate about creating innovative and
            user-friendly web applications.
          </p>
        </div>
        <div className="home-image">
          <img src="/pfp.jpeg" alt="Tuğcan" className="animated-photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
