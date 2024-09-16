import './App.css';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from "./Components/Hero/HeroSection";
import SessionGroup from './Components/Sessions/SessionGroup';
import Footer from './Components/Footer/Footer';

export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SessionGroup limits={[0, 1]}/>
      <Footer/>
    </div>
  );
}
