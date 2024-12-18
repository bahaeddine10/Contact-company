
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";


import Contact from './components/contact';
import Home from './components/home'; 
import Services from './components/services'; 

import About  from "./components/about";
import Career from "./components/Carrer";
import DemandJob from './components/DemandJob';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/Apply" element={<DemandJob/>} />
       
        
        <Route path="/careers" element={<Career/>} />
        
        <Route path="*" element={<div> Not found </div>} />

      </Routes>
      
     
  </div>
  );
}

export default App;
