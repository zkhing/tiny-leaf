import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/Ellipse 4.svg';

function Header() {
  return (
    <div className="header-wrapper">

      <section className="header-logo">
        <img src={logo} alt="Logo" />
        <h1>Tiny Leaf Tea House</h1>
      </section>

      <section className="navbar">
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/reservation">
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      
    </div>
  );
}

export default Header;
