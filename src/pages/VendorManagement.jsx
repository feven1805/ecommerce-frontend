import React, { useState } from 'react';
import { 
  Search, Bell, Settings as SettingsIcon, User, UserPlus, 
  ArrowUpRight, Download, ChevronRight, ChevronLeft, MoreVertical, 
  CheckCircle2, Clock, ShieldAlert, Filter, ChevronDown
} from 'lucide-react';

const vendors = [
  { 
    id: 1, 
    name: 'Aura Lifestyle Co.', 
    contact: 'contact@aura.edu • +1 555-0123', 
    inventory: '342 Items', 
    tier: 'PREMIUM TIER',
    joined: 'Oct 12, 2023',
    status: 'VERIFIED'
  },
  { 
    id: 2, 
    name: 'TechNexus Labs', 
    contact: 'support@technexus.io • +1 555-9988', 
    inventory: '89 Items', 
    tier: 'CAMPUS EXCLUSIVE',
    joined: 'Jan 04, 2024',
    status: 'VERIFIED'
  },
  { 
    id: 3, 
    name: 'Vantage Collective', 
    contact: 'hello@vantage.shop • +1 555-4422', 
    inventory: '12 Items', 
    tier: 'ONBOARDING',
    joined: 'Mar 28, 2024',
    status: 'PENDING'
  },
  { 
    id: 4, 
    name: 'Nordic Knits', 
    contact: 'sales@nordicknits.com • +1 555-3311', 
    inventory: '1,102 Items', 
    tier: 'HIGH VOLUME',
    joined: 'Aug 19, 2023',
    status: 'VERIFIED'
  },
];

const stats = [
  { label: 'TOTAL VENDORS', value: '142', change: '+12%', color: 'blue' },
  { label: 'PENDING APPROVAL', value: '08', change: 'Action Req.', color: 'yellow' },
  { label: 'ACTIVE PRODUCTS', value: '2.4k', change: null, color: 'blue' },
  { label: 'MONTHLY REVENUE', value: '$84.2k', change: null, color: 'dark' },
];

export default function VendorManagement() {
  const [activeTab, setActiveTab] = useState('Approved Vendors');

  return (
    <div className="dashboard-content">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="search-wrapper">
          <Search size={18} className="text-secondary" />
          <input type="text" placeholder="Search vendors, IDs, or contacts..." className="search-input" />
        </div>
        <div className="top-actions">
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><SettingsIcon size={20} /></button>
          <div className="profile-pill">
            <div className="profile-info text-right">
              <span className="profile-name">Admin Profile</span>
              <span className="profile-role">SYSTEM DIRECTOR</span>
            </div>
            <div className="profile-avatar">
              <img src="https://ui-avatars.com/api/?name=Admin+Profile&background=0066ff&color=fff" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        ADMIN CONSOLE <ChevronRight size={12} className="inline mx-1" /> <span>VENDOR MANAGEMENT</span>
      </nav>

      <header className="section-header">
        <div>
          <h1 className="page-title">Vendors</h1>
          <p className="sub-header">Oversee institutional partnerships, manage onboarding queues, and maintain quality standards across the campus digital marketplace.</p>
        </div>
        <div className="header-controls">
          <button className="btn-outline">
            Export CSV
          </button>
          <button className="btn-primary flex items-center gap-2">
            <UserPlus size={18} />
            Invite Vendor
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="stats-grid mb-8">
        {stats.map((stat, i) => (
          <div key={i} className={`stat-card ${stat.color === 'dark' ? 'revenue-card' : 'glass'}`}>
            <div className="stat-body">
              <span className="stat-label">{stat.label}</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="stat-value">{stat.value}</span>
                {stat.change && (
                  <span className={`stat-change ${stat.change.includes('+') ? 'positive' : 'neutral'}`}>
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
            {stat.color === 'blue' && <div className="stat-accent-bar blue"></div>}
            {stat.color === 'yellow' && <div className="stat-accent-bar yellow"></div>}
          </div>
        ))}
      </section>

      {/* Content Section */}
      <section className="glass p-8">
        <div className="tabs-container">
          {['Approved Vendors', 'Pending Approval', 'Suspended'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === 'Pending Approval' && <span className="count-badge">8</span>}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <button className="btn-outline">
              All Departments <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="btn-outline">
              Latest First <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
          <span className="text-xs uppercase font-bold text-secondary tracking-widest">
            Showing 1-10 of 124 vendors
          </span>
        </div>

        <table className="ops-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>VENDOR IDENTITY</th>
              <th>INVENTORY</th>
              <th>JOINED</th>
              <th>COMPLIANCE</th>
              <th className="text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>
                  <div className="vendor-identity">
                    <div className="vendor-avatar">
                      <div className="w-6 h-6 rounded bg-slate-200 border border-slate-300"></div>
                    </div>
                    <div className="vendor-info">
                      <h4>{vendor.name}</h4>
                      <p>{vendor.contact}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{vendor.inventory}</div>
                  <span className={`inventory-badge ${
                    vendor.tier.includes('PREMIUM') ? 'blue' : 
                    vendor.tier.includes('EXCLUSIVE') ? 'yellow' : 
                    vendor.tier.includes('HIGH') ? 'green' : 'secondary'
                  }`}>
                    {vendor.tier}
                  </span>
                </td>
                <td>
                  <div className="text-secondary font-medium">{vendor.joined}</div>
                </td>
                <td>
                  <span className={`status-badge ${vendor.status.toLowerCase()}`}>
                    {vendor.status}
                  </span>
                </td>
                <td>
                  {vendor.status === 'PENDING' ? (
                    <div className="action-group">
                      <button className="btn-approve">APPROVE</button>
                      <button className="btn-reject">REJECT</button>
                    </div>
                  ) : (
                    <div className="text-right">
                      <button className="icon-btn"><MoreVertical size={18} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button className="icon-btn"><ChevronLeft size={18} /></button>
          <a href="#" className="page-link active">1</a>
          <a href="#" className="page-link">2</a>
          <a href="#" className="page-link">3</a>
          <span className="text-secondary">...</span>
          <a href="#" className="page-link">12</a>
          <button className="icon-btn"><ChevronRight size={18} /></button>
          <a href="#" className="page-nav ml-4">
            Next <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>
      </section>

      {/* Compliance Banner */}
      <footer className="compliance-banner">
        <div className="compliance-content">
          <h2>Quality Compliance Reminder</h2>
          <p>
            All pending vendors must be vetted within 48 hours of application. Ensure compliance with the 
            <a href="#" className="mx-1">Campus Merchant Ethics 2024</a> 
            guidelines before final approval.
          </p>
        </div>
        <button className="btn-protocol">
          Review Protocol
        </button>
      </footer>
    </div>
  );
}
