import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://media4.picsearch.com/is?NA2URlUh-bTiuGTeSaqAz94OpJ2kpVmN9D_dzApws1g&height=341"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
