import React from 'react'
import { NavLink } from "react-router-dom";

function RightNav() {
  return (
      
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
      
    
  );
}

export default RightNav