import React from 'react'
import HeroMenu from "../components/Menu/HeroMenu"
import ReservationMenu from "../components/Menu/ReservationMenu";
import TeaMenu from "../components/Menu/TeaMenu";
import SpecialMenu from "../components/Menu/SpecialMenu"; 

function Menu() {
  return (
    <div>
      <HeroMenu />
      <TeaMenu />
      <SpecialMenu />
      <ReservationMenu />
    </div>
  )
}

export default Menu