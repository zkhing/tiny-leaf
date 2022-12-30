import React from "react";
import "./App.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import MakeReservation from "./components/Reservation/MakeReservation";
import Ourblends from "./components/About/Ourblends";
import WiseLeafEvenings from "./components/About/WiseLeafEvenings";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

       <main>
          <Hero />
          <Ourblends />
          <WiseLeafEvenings />
          <MakeReservation />
          <Gallery />
       </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
