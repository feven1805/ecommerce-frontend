import React from 'react';
import { FiGrid, FiStar, FiShoppingBag, FiSettings, FiHelpCircle } from 'react-icons/fi';

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>CAMPUS VENDOR</h2>
        <div className="rating-badge">
          <span className="rating-value">$4.8</span>
          <span className="rating-max">/ 5.0</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <FiGrid className="nav-icon" />
          <span>Dashboard</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          <FiStar className="nav-icon" />
          <span>Reviews & Ratings</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'vendor' ? 'active' : ''}`}
          onClick={() => setActiveTab('vendor')}
        >
          <FiShoppingBag className="nav-icon" />
          <span>Vendor Portal</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <button className="footer-item">
          <FiSettings />
          <span>Settings</span>
        </button>
        <button className="footer-item">
          <FiHelpCircle />
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;