import React from 'react';
import { FiDollarSign, FiPackage, FiStar, FiTrendingUp } from 'react-icons/fi';
import StatsCard from './Stats';

function Dashboard({ data, loading }) {
  if (loading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  if (!data) {
    return <div className="error">Failed to load dashboard data</div>;
  }

  const stats = [
    { title: 'Total Revenue', value: `$${data.totalRevenue?.toLocaleString() || '0'}`, icon: FiDollarSign, color: '#10b981' },
    { title: 'Items Sold', value: data.totalItems || 0, icon: FiPackage, color: '#3b82f6' },
    { title: 'Rating', value: data.rating || 0, icon: FiStar, color: '#f59e0b' },
    { title: 'Performance', value: '+23%', icon: FiTrendingUp, color: '#8b5cf6' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Operational Overview - September 2023</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card top-performers">
          <h3>TOP PERFORMING</h3>
          <div className="performers-list">
            {data.topPerformers && data.topPerformers.length > 0 ? (
              data.topPerformers.map((performer, index) => (
                <div key={index} className="performer-item">
                  <span className="performer-name">{performer.name}</span>
                  <span className="performer-revenue">${performer.revenue?.toLocaleString()}</span>
                </div>
              ))
            ) : (
              <div className="performer-item">
                <span className="performer-name">No products yet</span>
                <span className="performer-revenue">$0</span>
              </div>
            )}
          </div>
        </div>

        <div className="card live-updates">
          <h3>LIVE UPDATES</h3>
          <div className="updates-list">
            {data.recentOrders && data.recentOrders.length > 0 ? (
              data.recentOrders.map((order, index) => (
                <div key={index} className="update-item">
                  <div className="update-header">
                    <span className="update-title">New Order {order.id} Received</span>
                    <span className="update-time">{order.time}</span>
                  </div>
                  <p className="update-desc">
                    {order.product} ({order.units} units)
                  </p>
                </div>
              ))
            ) : (
              <div className="update-item">
                <div className="update-header">
                  <span className="update-title">No orders yet</span>
                  <span className="update-time">Waiting for customers</span>
                </div>
                <p className="update-desc">Orders will appear here</p>
              </div>
            )}
            <div className="update-item">
              <div className="update-header">
                <span className="update-title">Payout Successful!</span>
                <span className="update-time">{data.recentPayout?.time || 'No payouts yet'}</span>
              </div>
              <p className="update-desc">
                ${data.recentPayout?.amount?.toLocaleString() || '0'} received to bank account
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card optimize-storefront">
        <h3>OPTIMIZE YOUR STOREFRONT</h3>
        <p>Optimize your storefront with inventory management, pricing, and more.</p>
        <button className="btn-primary">Start Optimizing</button>
      </div>
    </div>
  );
}

export default Dashboard;