import React from 'react'
import Gallery from "../components/Home/Gallery/Gallery";
import HomeHero from "../components/Home/Hero/HomeHero";
import HomeReservation from "../components/Home/Reservation/HomeReservation";
import Ourblends from "../components/Home/About/Ourblends";
import EventDetails from "../components/Home/About/EventDetails";

function Home() {
  return (
    <div>
      <HomeHero />
      <Ourblends />
      <EventDetails />
      <HomeReservation />
      <Gallery />
    </div>
  )
}

export default Home