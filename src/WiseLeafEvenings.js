import React from "react";
import img1 from "./images/Wiseleaf1.png";
import img2 from "./images/Wiseleaf2.png";

function WiseLeafEvenings() {
  return (
    <div>
      <img src={img1} alt="" />
      <h2>WiseLeafEvenings</h2>
      <p>
        Bringing together those with curious minds, speakers and observers
        alike, our Wise Leaf events are a melting pot to share, reflect and
        contemplate.
      </p>
      <img src={img2} alt="" />
    </div>
  );
}

export default  WiseLeafEvenings;