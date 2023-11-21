import React, { useState } from "react";
import logo from "../images/logo1.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn"></input>
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a
            href="#"
            className="active"
            onClick={(e) => scrollToSection("main", e)}
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => scrollToSection("features", e)}>
            Features
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => scrollToSection("about", e)}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => scrollToSection("presentation", e)}>
            UI SS
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => scrollToSection("contact", e)}>
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
