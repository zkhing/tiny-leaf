import React from "react";
import {NavLink} from "react-router-dom";

export function NavLinks({open}) {

    return <ul className="nav-elements" style={{
        "opacity": open ? "100%" : "0",
        "transform": open ? "translateX(0)" : "translateX(100%)"
    }}>
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
    </ul>;
}
