import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Router from './router';

import { BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter className="App">
      <Navbar/>
        <Router/>
      <Footer/>
    </BrowserRouter>
  );
}
