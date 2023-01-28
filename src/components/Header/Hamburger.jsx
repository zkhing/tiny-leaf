import React from 'react'
import { useState } from "react";


function Hamburger() {

  const[open, setOpen] = useState(false);

  return (
    <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
      <div className="burger"> </div>
      <div className="burger"> </div>
      <div className="burger"> </div>
    </div>
  );
}

export default Hamburger