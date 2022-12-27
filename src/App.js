import "./App.css";
import React from "react";
import "./style/variables.css";
import Header from "./Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import MakeReservation from "./MakeReservation";
import Ourblends from "./Ourblends";
import WiseLeafEvenings from "./WiseLeafEvenings";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ourblends />
      <WiseLeafEvenings />
      <MakeReservation />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
