import React from 'react'
import ReservationHero from "../components/Reservations/ReservationHero";
import ReservationForm from "../components/Reservations/ReservationForm";
import MenuItems from "../components/Reservations/MenuItems";

function Reservation() {
  return (
    <div>
      <ReservationHero />
      <ReservationForm />
      <MenuItems />
    </div>
  );
}

export default Reservation