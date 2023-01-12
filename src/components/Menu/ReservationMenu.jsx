import React from 'react'

function ReservationMenu() {
  return (
    <div className="reservation-menu-container">
      <div className="reservation-caption">
        <h1 className="reservation-first-txt">
          Shall we put your name in the tea pot?
        </h1>
        <p className="reservation-second-txt">
          For anything from a catchup with a long lost friend to a book club
          gathering... we're always ready to put the kettle on.
        </p>
        <button className="reservation-menu-btn">Reserve a table</button>
      </div>
    </div>
  );
}

export default ReservationMenu