
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import QE from './components/QE';
import NF from './components/NF';
import PC from './components/PC';
import Contact from './components/contact';
import Home from './components/home'; 
import Services from './components/services'; 

import About  from "./components/about";
import Career from "./components/Carrer";

function App() {
  return (
    <div className='App'>
    <NavBar/>
    <BrowserRouter> 
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" index element={<About />} />

        <Route path="NF" element={<NF />} />
        
        <Route path="QE" element={<QE/>} />
        <Route path="PC" element={<PC/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Services/>} />
        <Route path="careers" element={<Career/>} />
        
        <Route path="*" element={<Home/>} />

      </Routes> 
    </BrowserRouter> 
  </div>
  );
}

export default App;
