
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
import Login from './components/Login';
//import Signup from './components/Signup';
import Accept from './components/Accept';
import Sidebar from './components/sidebar';
import Container from './components/container';


function App() {
  const location = useLocation();

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
        {/* <Route path="/signup" element={<Signup/>} /> */}
        {/*<Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accept" element={<Accept />} />
        <Route path="/sidebar" element={<Sidebar />} />*/}
        <Route path="/*" element={<Container/>} />
        <Route path="*" element={<div> Not found </div>} />

      </Routes>
      
     
  </div>
  );
}

export default App;
