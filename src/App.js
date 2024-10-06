
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";


import Contact from './components/contact';
import Home from './components/home'; 
import Services from './components/services'; 

import About  from "./components/about";
import Career from "./components/Carrer";

function App() {
  return (
    <div className='App'>
    <NavBar/>
    
      <Routes>
        <Route path="/Contact-company/#" index element={<Home />} />
        <Route path="/Contact-company/#/about"  element={<About />} />
        <Route path="/Contact-company/#/contact" element={<Contact/>} />
        <Route path="/Contact-company/#/services" element={<Services/>} />
        <Route path="/Contact-company/#/careers" element={<Career/>} />
        
        <Route path="*" element={<div> Not found </div>} />

      </Routes>
      
     
  </div>
  );
}

export default App;
