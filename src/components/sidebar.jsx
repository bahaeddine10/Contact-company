import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { House, CheckCircle, Briefcase, Grid } from 'react-bootstrap-icons';
import './sidebar.css';

const NAV_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: House },
  { path: '/accept', label: 'Accepted', icon: CheckCircle },
  { path: '/project', label: 'Projects', icon: Briefcase },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Navbar expand="md" variant="dark" className="app-sidebar-navbar">
      {/* Slim top strip — only visible below 768px */}
      <Container fluid className="app-sidebar-topbar d-md-none">
        <Navbar.Brand className="app-sidebar-brand-sm">
          <span className="brand-badge">
            <Grid />
          </span>
          <span className="brand-title-sm">Admin Panel</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="app-sidebar-offcanvas"
          className="sidebar-toggle"
        />
      </Container>

      {/* Renders inline as a fixed rail on desktop, as a slide-in
          Offcanvas panel below the md breakpoint */}
      <Navbar.Offcanvas
        id="app-sidebar-offcanvas"
        aria-labelledby="app-sidebar-offcanvas-label"
        placement="start"
        className="app-sidebar"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="d-md-none">
          <Offcanvas.Title id="app-sidebar-offcanvas-label">Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="app-sidebar-body">
          <div className="app-sidebar-brand d-none d-md-flex">
            <span className="brand-badge">
              <Grid />
            </span>
            <div className="brand-text">
              <div className="brand-title">Admin Panel</div>
              <div className="brand-sub">Control Center</div>
            </div>
          </div>

          <Nav className="flex-column app-sidebar-nav">
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Nav.Link
                  key={path}
                  as={Link}
                  to={path}
                  className={`sidebar-link${isActive ? ' active' : ''}`}
                >
                  <Icon className="sidebar-link-icon" aria-hidden="true" />
                  <span>{label}</span>
                </Nav.Link>
              );
            })}
          </Nav>

          <div className="app-sidebar-footer">
            <small>&copy; 2026 Deployed by Adam Abassi</small>
          </div>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}