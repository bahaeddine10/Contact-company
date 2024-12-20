import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <Navbar bg="secondary"  className="flex-column p-3" style={{ height: '100vh', width: '200px' }}>
      <Navbar.Brand>Agent Panel</Navbar.Brand>
      <Nav className="flex-column">
        <Link to="/dashboard" className="nav-link">
          Attands
        </Link>
        <Link to="/accept" className="nav-link">
          Accepted
        </Link>
      </Nav>
    </Navbar>
  );
}
/*
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { House, CheckCircle, XCircle } from 'react-bootstrap-icons';

const styles = {
  sidebar: {
    height: '100vh',
    width: '250px',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  brand: {
    marginBottom: '1.5rem',
    width: '100%',
    textAlign: 'center', // Removed `as const`
  },
  brandTitle: {
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  navLink: {
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    padding: '10px 15px',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center', // Removed `as const`
    color: '#6c757d',
  },
};

export default function Sidebar() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return `nav-link mb-2 ${location.pathname === path ? 'active' : ''}`;
  };

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      className="flex-column p-3 shadow-lg" 
      style={styles.sidebar}
    >
      <style>
        {`
          .nav-link:hover, .nav-link.active {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
          }
          .nav-link:hover {
            background-color: white;
            color: #343a40 !important;
          }
          @media (max-width: 768px) {
            .navbar {
              width: 100% !important;
              height: auto !important;
            }
            .nav-link:hover {
              transform: none;
            }
          }
        `}
      </style>

      <Navbar.Brand style={styles.brand}>
        <h4 style={styles.brandTitle}>Admin Panel</h4>
      </Navbar.Brand>
      <Nav className="flex-column w-100">
        <Link 
          to="/dashboard" 
          className={getNavLinkClass('/dashboard')}
          style={styles.navLink}
        >
          <House style={styles.icon} /> Dashboard
        </Link>
        <Link 
          to="/accepte" 
          className={getNavLinkClass('/not-accepted')}
          style={styles.navLink}
        >
          <XCircle style={styles.icon} /> Not Accepted
        </Link>
        <Link 
          to="/accepte" 
          className={getNavLinkClass('/accepte')}
          style={styles.navLink}
        >
          <CheckCircle style={styles.icon} /> Accepted
        </Link>
      </Nav>
      <div style={styles.footer}>
        <small>&copy; 2023 Your Company</small>
      </div>
    </Navbar>
  );
}
*/