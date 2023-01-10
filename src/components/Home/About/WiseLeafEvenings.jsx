import React from "react";
import img1 from "../../../images/Home/Wiseleaf1.png";
import img2 from "../../../images/Home/Wiseleaf2.png";

function WiseLeafEvenings() {
  return (
    <div className="wiseleaf-container">

      <section>
        <img src={img1} alt="" />
      </section>

      <section>
        <div className="wiseleaf-info">
          <h2>WiseLeafEvenings</h2>
          <p>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
      </section>

      <section>
        <img className="wiseLeaf-img2" src={img2} alt="" />
      </section>
    </div>
  );
}

export default WiseLeafEvenings;
