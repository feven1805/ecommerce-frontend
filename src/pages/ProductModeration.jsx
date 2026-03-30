import React, { useState } from 'react';
import { 
  Search, Bell, Settings as SettingsIcon, User, 
  ChevronRight, MoreVertical, CheckCircle2, 
  AlertTriangle, Zap, Clock, ShieldCheck, 
  ChevronLeft, ChevronDown
} from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'Archival Logo Hoodie', 
    sku: 'SKU: CH-2024-012',
    vendor: 'Campus Threads Co.',
    vendorVerified: true,
    price: '$85.00',
    status: 'REPORTED',
    reason: 'Inappropriate'
  },
  { 
    id: 2, 
    name: 'Founders Edition Journal', 
    sku: 'SKU: ST-2024-882',
    vendor: 'The Scholars Guild',
    vendorVerified: false,
    price: '$42.50',
    status: 'RECENTLY ADDED'
  },
  { 
    id: 3, 
    name: 'Luxury Summer Shades', 
    sku: 'SKU: EX-9912-X',
    vendor: 'External Vendor X',
    vendorVerified: false,
    price: '$299.99',
    status: 'REPORTED',
    reason: 'Spam'
  },
  { 
    id: 4, 
    name: 'Campus SmartWatch v2', 
    sku: 'SKU: TECH-443-A',
    vendor: 'Tech Hub Varsity',
    vendorVerified: true,
    price: '$149.00',
    status: 'UNDER REVIEW'
  },
];

export default function ProductModeration() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="dashboard-content">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="search-wrapper">
          <Search size={18} className="text-secondary" />
          <input type="text" placeholder="Search catalog..." className="search-input" />
        </div>
        <div className="top-actions">
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><SettingsIcon size={20} /></button>
          <div className="profile-pill">
            <div className="profile-info text-right">
              <span className="profile-name">Admin Profile</span>
              <span className="profile-role">HEAD CURATOR</span>
            </div>
            <div className="profile-avatar">
               <img src="https://ui-avatars.com/api/?name=Head+Curator&background=0b1426&color=fff" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      {/* Header */}
      <header className="section-header">
        <div>
          <h1 className="page-title">Product Moderation</h1>
          <p className="sub-header">Ensure the campus marketplace maintains excellence. Review flagged items and manage new submissions from authorized vendors.</p>
        </div>
        <div className="pill-tabs">
          {['All', 'Reported', 'Recently Added'].map((cat) => (
            <button 
              key={cat}
              className={`pill-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Product Table Section */}
      <section className="glass p-0 overflow-hidden mb-8">
        <table className="ops-table">
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th style={{ paddingLeft: '32px' }}>PRODUCT</th>
              <th>VENDOR</th>
              <th>PRICE</th>
              <th>MODERATION STATUS</th>
              <th className="text-right" style={{ paddingRight: '32px' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ paddingLeft: '32px' }}>
                  <div className="vendor-identity">
                    <div className="product-avatar">
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                         {/* Placeholder for product image */}
                         <div className="w-8 h-8 bg-slate-400 rounded"></div>
                      </div>
                    </div>
                    <div className="vendor-info">
                      <h4>{product.name}</h4>
                      <p>{product.sku}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2 font-bold">
                    {product.vendor}
                    {product.vendorVerified && <CheckCircle2 size={16} className="text-blue" />}
                  </div>
                </td>
                <td className="font-bold">{product.price}</td>
                <td>
                  <div className="flex flex-col items-start gap-1">
                    <span className={`status-pill ${
                      product.status === 'REPORTED' ? 'reported' : 
                      product.status === 'RECENTLY ADDED' ? 'recently-added' : 
                      'under-review'
                    }`}>
                      {product.status === 'REPORTED' && <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>}
                      {product.status === 'RECENTLY ADDED' && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                      {product.status === 'UNDER REVIEW' && <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>}
                      {product.status.replace('_', ' ')}
                    </span>
                    {product.reason && (
                      <div className="reason-box">
                        <span className="reason-label">Reason:</span>
                        <span className="reason-text">{product.reason}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="text-right" style={{ paddingRight: '32px' }}>
                  <button className="icon-btn"><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-6 border-t border-slate-100 flex justify-between items-center">
           <span className="text-secondary text-xs font-bold uppercase tracking-widest">Showing 4 of 128 items</span>
           <div className="flex gap-2">
              <button className="icon-btn"><ChevronLeft size={18} /></button>
              <button className="page-link active">1</button>
              <button className="page-link">2</button>
              <button className="page-link">3</button>
              <button className="icon-btn"><ChevronRight size={18} /></button>
           </div>
        </div>
      </section>

      {/* Stats Section (Bottom) */}
      <section className="stats-grid">
        <div className="stat-card dark-card revenue-card p-6">
           <div className="flex justify-between items-start">
             <div className="stat-body">
                <span className="stat-label uppercase tracking-widest text-xs">Total Reported</span>
                <span className="stat-value text-3xl mt-2">24</span>
                <div className="flex items-center gap-2 mt-4 text-red-400 text-xs font-bold">
                   <div className="w-4 h-4 flex items-center justify-center">📈</div>
                   +12% from last week
                </div>
             </div>
             <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                <AlertTriangle size={24} className="text-slate-400" />
             </div>
           </div>
        </div>

        <div className="stat-card glass p-6">
           <div className="stat-body">
              <span className="stat-label uppercase tracking-widest text-xs">Average Response</span>
              <span className="stat-value text-3xl mt-2">2.4h</span>
              <div className="kpi-badge">
                 <ShieldCheck size={12} /> Within KPI targets
              </div>
           </div>
        </div>

        <div className="stat-card glass p-6">
           <div className="stat-body">
              <span className="stat-label uppercase tracking-widest text-xs">Vendor Compliance</span>
              <span className="stat-value text-3xl mt-2">98.2%</span>
              <div className="compliance-progress">
                 <div className="progress-fill" style={{ width: '98.2%' }}></div>
              </div>
           </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="btn-batch">
        <Zap size={20} />
        Batch Approve
      </button>
    </div>
  );
}
