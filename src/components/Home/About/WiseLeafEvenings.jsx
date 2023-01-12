import React from "react";
import img1 from "../../../images/Home/Wiseleaf1.png";
import img2 from "../../../images/Home/Wiseleaf2.png";

function WiseLeafEvenings() {
  return (
    <>
      <section className="wiseleaf-container">
        <div className="wiseleaf-img1">
          <img className="teapot-img" src={img1} alt="teapot" />
        </div>

        <div className="wiseleaf-info">
          <h2>WiseLeafEvenings</h2>
          <p>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>

        <div className="wiseleaf-img2">
          <img className="flowers-img" src={img2} alt="flowers" />
        </div>
      </section>
    </>
  );
}

export default WiseLeafEvenings;
