
import './App.css';
import Header from './components/Header/Header';
import Footer from './Footer';
import Gallery from './Gallery';
import Hero from './Hero';
import MakeReservation from './MakeReservation';
import Ourblends from './Ourblends';
import WiseLeafEvenings from './WiseLeafEvenings';


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
