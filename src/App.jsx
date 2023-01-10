import React from "react";
import "./App.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeroReservation from "./components/Reservations/HeroReservation";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ReservationForm from "./components/Reservations/ReservationForm";
import MenuItems from "./components/Reservations/MenuItems";

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/reservation" element={
          <>
           <HeroReservation />
           <ReservationForm />
           <MenuItems />
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
