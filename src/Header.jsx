import React from "react";
import logo from "./images/Ellipse 4.svg";


function Header() {
  return (
    <div className="header-wrapper">
     
        <img className="header-logo" src={logo} alt="Logo" />
        <h1 className="title">Tiny Leaf Tea House</h1>
        {/* <img className="hamburgerMenu" src={hamburger} alt="Hamburger menu"/> */}
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
          </ul>
        </nav>
        
    </div>
  );
}

export default Header;
