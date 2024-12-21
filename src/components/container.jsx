// Container.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from './Dashboard';
import Accept from './Accept';
import ProjectManagement from './project';

export default function Container() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          {/*<Route path="/dashboard" element={<Dashboard />} />*/}
          <Route path="/accept" element={<Accept />} />
          {/* Default route */}
          <Route path="*" element={<Dashboard />} />
          <Route path="/project" element={<ProjectManagement/>} />
        </Routes>
      </div>
    </div>
  );
}
