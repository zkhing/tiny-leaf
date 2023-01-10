import React from 'react'
import Gallery from "../components/Home/Gallery/Gallery";
import Hero from "../components/Home/Hero/Hero";
import MakeReservation from "../components/Home/Reservation/MakeReservation";
import Ourblends from "../components/Home/About/Ourblends";
import WiseLeafEvenings from "../components/Home/About/WiseLeafEvenings";

function Home() {
  return (
    <div>
      <Hero />
      <Ourblends />
      <WiseLeafEvenings />
      <MakeReservation />
      <Gallery />
    </div>
  )
}

export default Home