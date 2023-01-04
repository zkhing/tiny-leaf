import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/Ellipse 4.svg';

function Header() {
  return (
    <div className="header-wrapper">
     
        <img className="header-logo" src={logo} alt="Logo" />
        <h1 className="title">Tiny Leaf Tea House</h1>
        {/* <img className="hamburgerMenu" src={hamburger} alt="Hamburger menu"/> */}
        <nav className="navbar">
          <ul>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li>
              <Link className="nav-link" to="/reservation">Reservation</Link>
            </li>
          </ul>
        </nav>
        
    </div>
  );
}

export default Header;
