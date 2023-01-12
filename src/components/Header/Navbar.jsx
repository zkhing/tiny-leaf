import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/Ellipse 4.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>Tiny Leaf Tea House</h2>
        </div>

        <div className="nav-elements">
          <ul>
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/reservation">
                Reservation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
