import React from 'react'
import MenuHero from "../components/Menu/MenuHero"
import ReservationMenu from "../components/Menu/ReservationMenu";
import TeaMenu from "../components/Menu/TeaMenu";
import SpecialMenu from "../components/Menu/SpecialMenu"; 

function Menu() {
  return (
    <div>
      <MenuHero />
      <TeaMenu />
      <SpecialMenu />
      <ReservationMenu />
    </div>
  )
}

export default Menu