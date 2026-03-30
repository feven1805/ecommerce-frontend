import { Search, Bell, Settings as SettingsIcon, Filter, Download, User, ShoppingCart, Package, Users, TrendingUp, Zap, AlertCircle, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '12,482', change: '+12%', color: 'blue', icon: Users },
  { label: 'Vendors', value: '342', change: '+4.2%', color: 'yellow', icon: ShoppingCart },
  { label: 'Products', value: '1,894', change: 'Stable', color: 'gray', icon: Package },
  { label: 'Orders', value: '8,230', change: '-2.1%', color: 'blue', icon: ShoppingCart },
  { label: 'Revenue', value: '$42.8k', change: '+18%', color: 'dark', icon: TrendingUp },
];

const operations = [
  { id: '#CE-94021', type: 'Product Sale', user: 'Sarah Jenkins', amount: '$12.50', status: 'Success' },
  { id: '#CE-94022', type: 'Vendor Payout', user: 'Campus Brew Co.', amount: '$1,240.00', status: 'Pending' },
  { id: '#CE-94023', type: 'Subscription', user: 'David Miller', amount: '$45.00', status: 'Success' },
  { id: '#CE-94024', type: 'Product Sale', user: 'Alex Murphy', amount: '$32.99', status: 'Success' },
  { id: '#CE-94025', type: 'Refund Request', user: 'Professional Admin', amount: '-$18.00', status: 'Pending' },
];

export default function AdminDashboard() {
  return (
    <div className="dashboard-content">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="search-wrapper">
          <Search size={18} className="text-secondary" />
          <input type="text" placeholder="Search data points..." className="search-input" />
        </div>
        <div className="top-actions">
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><SettingsIcon size={20} /></button>
          <div className="profile-pill">
            <div className="profile-info text-right">
              <span className="profile-name">ADMIN PROFILE</span>
              <span className="profile-role">Super Administrator</span>
            </div>
            <div className="profile-avatar">
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Header */}
          <section className="section-header">
            <div>
              <h1 className="page-title">System <span className="text-blue">Overview</span></h1>
              <p className="text-secondary mt-1">Real-time performance analytics and operational health for the Campus Editorial ecosystem.</p>
            </div>
            <div className="header-controls">
              <div className="toggle-group">
                <button className="toggle-btn active">LIVE</button>
                <button className="toggle-btn">24H</button>
                <button className="toggle-btn">7D</button>
              </div>
              <button className="btn-export">
                <Download size={16} />
                Export Report
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <section className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card ${stat.color === 'dark' ? 'dark-card' : 'glass'}`}>
                <div className="stat-header">
                  <div className={`stat-icon-wrapper ${stat.color}`}>
                    <stat.icon size={18} />
                  </div>
                  <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : stat.change === 'Stable' ? 'neutral' : 'negative'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="stat-body">
                  <span className="stat-label uppercase">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
                {stat.color !== 'dark' && <div className={`stat-accent-bar ${stat.color}`}></div>}
              </div>
            ))}
          </section>

          {/* Recent Operations */}
          <section className="glass mt-8 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="section-title">Recent Operations</h3>
                <p className="text-secondary text-sm">Real-time activity log across all departments</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-outline"><Filter size={16} /> Filter</button>
                <button className="btn-dark">VIEW ALL</button>
              </div>
            </div>
            <table className="ops-table">
              <thead>
                <tr>
                  <th>TRANSACTION ID</th>
                  <th>TYPE</th>
                  <th>VENDOR / USER</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {operations.map((op, i) => (
                  <tr key={i}>
                    <td className="font-bold text-blue">{op.id}</td>
                    <td>{op.type}</td>
                    <td>{op.user}</td>
                    <td className="font-bold">{op.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Side Panel */}
        <aside className="dashboard-side">
          {/* Quick Actions */}
          <section className="side-card dark-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="uppercase tracking-widest text-sm font-bold">Quick Actions</h3>
              <Zap size={16} className="text-yellow" />
            </div>
            <div className="space-y-3">
              <button className="side-action-btn">
                <div className="flex items-center gap-3">
                  <Package size={18} className="text-blue" />
                  <div className="text-left">
                    <p className="font-bold text-sm">Vendor Approvals</p>
                    <p className="text-xs text-secondary">5 Pending verification</p>
                  </div>
                </div>
              </button>
              <button className="side-action-btn">
                <div className="flex items-center gap-3">
                   <AlertCircle size={18} className="text-red" />
                  <div className="text-left">
                    <p className="font-bold text-sm">Reported Products</p>
                    <p className="text-xs text-secondary">3 Flagged for review</p>
                  </div>
                </div>
              </button>
            </div>
            <button className="w-full mt-4 py-2 text-xs uppercase font-bold text-secondary border border-white/10 rounded-lg hover:border-white/20 transition-all">
              View All Tasks
            </button>
          </section>

          {/* System Health */}
          <section className="glass p-6 mt-6">
             <h3 className="uppercase tracking-widest text-xs font-bold text-secondary mb-4">System Health</h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-sm font-medium">API Latency</span>
                 <div className="flex items-center gap-2">
                   <span className="text-sm font-bold text-green">42ms</span>
                   <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_var(--neon-green-glow)]"></div>
                 </div>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm font-medium">Storage Usage</span>
                 <div className="flex items-center gap-2">
                   <span className="text-sm font-bold text-green">68%</span>
                   <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_var(--neon-green-glow)]"></div>
                 </div>
               </div>
             </div>
          </section>

          {/* Live Activity */}
          <section className="glass p-6 mt-6">
             <h3 className="uppercase tracking-widest text-xs font-bold text-secondary mb-4">Live Activity</h3>
             <div className="space-y-6 relative">
               <div className="activity-item">
                  <div className="activity-line"></div>
                  <div className="activity-dot blue"></div>
                  <div>
                    <p className="text-sm font-bold">New Order #4293</p>
                    <p className="text-xs text-secondary">2 minutes ago • $124.00</p>
                  </div>
               </div>
               <div className="activity-item">
                  <div className="activity-dot yellow"></div>
                  <div>
                    <p className="text-sm font-bold">New Vendor Signup</p>
                    <p className="text-xs text-secondary">14 minutes ago • Campus Brew</p>
                  </div>
               </div>
             </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
