import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="header-part">
            <img src="public/PASSPORTSIZEPHOTO.jpeg" alt=""/>
            <div className="credentials">
                <h1>Soumyadeep Chatterjee</h1>
                <h4>Frontend Developer</h4>
                <a href="https://github.com/Soumya98-dev">soumyadeep.website</a>
            </div>
            <div className="btns">
                <a href="mailto: soumyadeepchatterjee803@gmail.com">
                    <img src="public/Button.png"/>
                </a>
                <a className="linkedin-btn" href="https://www.linkedin.com/in/soumyadeep-chatterjee-60a086210/">
                    <img className="linkedin-btn-img" src="public/LinkedIn-Button.png"/>
                </a>
            </div>
        </header>
    );
}

export default Header;
