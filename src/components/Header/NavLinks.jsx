import React from "react";
import { NavLink } from "react-router-dom";

export function NavLinks({open}) {
  return (
    <div>
      <ul className="nav-elements">
        {/* <div
          style={{
            transform: open ? "translateX(100%)" : "translateX(0)",
          }}
        /> */}
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
