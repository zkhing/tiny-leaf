import React from "react";

function MakeReservation() {
  return (
    <div className="reservation-container">
      <div className="caption">
         <h3 className="first-txt">Make a reservation</h3>
         <p className="second-txt">For anything from a catchup with a long lost friend to a book club gathering... we're always ready to put the kettle on.</p>
         <button className="btn-reservation">Reserve a table</button>
      </div>
    </div>
  );
}

export default MakeReservation;