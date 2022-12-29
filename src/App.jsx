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
      <header>
        <Header />
      </header>

       <main>
        
        <section>
          <Hero />
        </section>
        <section>
          <Ourblends />
        </section>
        <section>
          <WiseLeafEvenings />
        </section>
        <section>
          <MakeReservation />
        </section>
        <section>
          <Gallery />
        </section>

       </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
