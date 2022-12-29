import React from "react";
import logo from "./images/Ellipse 4.svg";
import hamburger from "./images/hamburgermenu.png"

function Header() {
  return (
    <div>
      <section className="header-wrapper">
        <img className="header-logo" src={logo} alt="Logo" />
        <h1 className="title">Tiny Leaf Tea House</h1>
        <img className="hamburgerMenu" src={hamburger} alt="Hamburger menu"/>
      </section>
    </div>
  );
}

export default Header;
