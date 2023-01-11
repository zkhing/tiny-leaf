import React from "react";
import "./App.css";
import "./styles/variables.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
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
