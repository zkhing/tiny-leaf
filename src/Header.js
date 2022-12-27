import React from "react";
import logo from "./images/Ellipse 4.svg";
function Header() {
  return (
    <div>
      <section className="header-wrapper">
        <img src={logo} alt="" />
        <h1>Tiny Leaf Tea House</h1>
      </section>
    </div>
  );
}

export default Header;
