import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import ReviewSection from './components/ReviewsSection';
import VendorPortal from './components/VendorPortal';
import { fetchDashboardData } from './services/api';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const data = await fetchDashboardData();
      setDashboardData(data);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard data={dashboardData} loading={loading} />;
      case 'reviews':
        return <ReviewSection />;
      case 'vendor':
        return <VendorPortal />;
      default:
        return <Dashboard data={dashboardData} loading={loading} />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;