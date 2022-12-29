import React from "react";
import "./App.css";
import "./styles/variables.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import MakeReservation from "./MakeReservation";
import Ourblends from "./Ourblends";
import WiseLeafEvenings from "./WiseLeafEvenings";

function App() {
  return (
    <div className="App">
      <Header />

       <main>

         <Hero />
         <Ourblends />
         <WiseLeafEvenings />
         <MakeReservation />
         <Gallery />

       </main>

      <Footer />
    </div>
  );
}

export default App;
