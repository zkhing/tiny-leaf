import React from 'react'
import HeroReservation from "../components/Reservations/HeroReservation";
import ReservationForm from "../components/Reservations/ReservationForm";
import MenuItems from "../components/Reservations/MenuItems";

function Reservation() {
  return (
    <div>
      <HeroReservation />
      <ReservationForm />
      <MenuItems />
    </div>
  );
}

export default Reservation