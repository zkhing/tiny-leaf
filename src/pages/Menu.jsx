import React from 'react'
import MenuHero from "../components/Menu/MenuHero"
import MenuReservation from "../components/Menu/MenuReservation";
import TeaMenu from "../components/Menu/TeaMenu";
import SpecialMenu from "../components/Menu/SpecialMenu"; 

function Menu() {
  return (
    <div>
      <MenuHero />
      <TeaMenu />
      <SpecialMenu />
      <MenuReservation />
    </div>
  )
}

export default Menu