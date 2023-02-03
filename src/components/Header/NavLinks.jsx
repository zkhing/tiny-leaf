import React from "react";
import { NavLink } from "react-router-dom";

export function NavLinks() {
  return (
    <div>
      <ul className="nav-elements">
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
  );
}
