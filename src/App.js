
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route,useLocation } from "react-router-dom";
import Contact from './components/contact';
import Home from './components/home'; 
import Services from './components/services'; 
import About  from "./components/about";
import Career from "./components/Carrer";
import DemandJob from './components/DemandJob';
import Dashboard from './components/Dashboard';
import Login from './components/login';
//import Signup from './components/Signup';
import Accept from './components/Accept';
import Sidebar from './components/sidebar';
import Container from './components/container';


function App() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.block');

    if (!elements.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Define routes where the Sidebar should appear
  const sidebarRoutes = ["/dashboard", "/accept"];
  return (
    <div className='App'>
    <NavBar/>
    <div className="d-flex">
        {/* Conditionally render Sidebar */}
        {/*{sidebarRoutes.includes(location.pathname) && <Sidebar />}*/}

        {/* Main Content */}</div>
        <div style={{ flex: 1 }}></div>
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/Apply" element={<DemandJob/>} />
       
        
        <Route path="/careers" element={<Career/>} />
        <Route path="/login" element={<Login/>} />
        {/*<Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accept" element={<Accept />} />
        <Route path="/sidebar" element={<Sidebar />} />*/}
        <Route path="/*" element={<Container/>} />
        <Route path="*" element={<div> Not found </div>} />

      </Routes>
      
     
  </div>
  );
}

export default App;
