import React from "react";
import "./CSS/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="left-container">
        <div className="placeholder" />
        <div className="placeholder" />
      </div>
      <div className="right-container">
        <div className="circle" />
        <Link
          to="mailto:vigneshbalanmvgs2003@gmail.com"
          className="link mail"
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i> Mail
        </Link>
        <Link
          to="https://github.com/vigneshbalan-mvgs"
          className="link github"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i> GitHub
        </Link>
        <Link
          to="https://www.linkedin.com/in/vignesh-balan-mvgs"
          className="link linkedin"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Home;
