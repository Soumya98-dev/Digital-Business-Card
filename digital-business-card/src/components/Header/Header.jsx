import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-part">
      <img src="public/PASSPORTSIZEPHOTO.jpeg" alt="" />
      <div className="credentials">
        <h1>Soumyadeep Chatterjee</h1>
        <h4>Frontend Developer</h4>
        <a href="https://github.com/Soumya98-dev">soumyadeep.website</a>
      </div>
      <div className="btns">
        <a
          className="email-btn"
          href="mailto: soumyadeepchatterjee803@gmail.com"
        >
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/soumyadeep-chatterjee-60a086210/"
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
