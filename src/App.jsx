import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import DashboardLayout from './layouts/dashboardLayout.jsx'; 

// Vendor Pages
import Dashboard from './pages/vendor/dahsboard.jsx';
import Orders from './pages/vendor/orders.jsx';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<DashboardLayout />}>
          {/* API  */}
          <Route path="/" element={<Dashboard />} />
          
          
          {/* API  */}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;