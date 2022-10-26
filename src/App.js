import './App.css';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Home from './components/Home';
import Location from './components/Location';
import Navbar from './components/Navbar';
import Testamoneals from './components/Testamoneals';
import { useEffect } from 'react';
import AOS from "aos";

function App() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Carousel />
    <Testamoneals />
    <Location />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
