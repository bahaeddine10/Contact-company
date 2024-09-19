
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";


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
        <Route path="/Contact-company/" index element={<Home />} />
        <Route path="/Contact-company/home"  element={<Home />} />

        <Route path="/Contact-company/about"  element={<About />} />

        <Route path="/Contact-company/NF" element={<NF />} />
        
        <Route path="/Contact-company/QE" element={<QE/>} />
        <Route path="/Contact-company/PC" element={<PC/>} />
        <Route path="/Contact-company/contact" element={<Contact/>} />
        <Route path="/Contact-company/services" element={<Services/>} />
        <Route path="/Contact-company/careers" element={<Career/>} />
        
        <Route path="*" element={<div> Not found </div>} />

      </Routes> 
    </BrowserRouter> 
  </div>
  );
}

export default App;
