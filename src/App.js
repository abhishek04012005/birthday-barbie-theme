import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import Event from './components/Event/Event';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import RSPV from './components/RSPV/RSPV';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Story />
      <Event />
      <RSPV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
