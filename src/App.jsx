import React from "react";
import "./App.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Home/Gallery/Gallery";
import Hero from "./components/Home/Hero/Hero";
import MakeReservation from "./components/Home/Reservation/MakeReservation";
import Ourblends from "./components/Home/About/Ourblends";
import WiseLeafEvenings from "./components/Home/About/WiseLeafEvenings";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeroMenu from "./components/Menu/HeroMenu"
import ReservationMenu from "./components/Menu/ReservationMenu";
import TeaMenu from "./components/Menu/TeaMenu";
import SpecialMenu from "./components/Menu/SpecialMenu";
import HeroReservation from "./components/Reservations/HeroReservation";
import Ctablock from "./components/Reservations/Ctablock";

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Header />
      </header>

       <main>
        <Routes>

        <Route exact path="/" element={
        <>
          <Hero />
          <Ourblends />
          <WiseLeafEvenings />
          <MakeReservation />
          <Gallery />
        </>
        }>
        </Route>

      
        <Route path="/menu" element={
          <>
           <HeroMenu />
           <TeaMenu />
           <SpecialMenu />
           <ReservationMenu />
          </>
          }>
        </Route>

        <Route path="/reservation" element={
          <>
           <HeroReservation />
           <Ctablock />
          </>
          }>
        </Route>

        </Routes>
       </main>

      <footer>
        <Footer />
      </footer>
    </div>
   </Router>
  );
}

export default App;
