import { LayoutDashboard, Users, ShoppingBag, MessageSquare, Settings, LogOut, Plus, ShoppingCart, UserCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Vendors', path: '/vendors' },
  { icon: ShoppingBag, label: 'Products', path: '/products' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: MessageSquare, label: 'Reviews', path: '/reviews' },
  { icon: UserCheck, label: 'Users', path: '/users' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="brand-name">AASTU</h1>
        <h2 className="brand-suffix">Gebeya</h2>
        <p className="sidebar-subtitle">Admin Console</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={20} />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="btn-new-product">
          <Plus size={18} />
          New Product
        </button>
        <div className="sidebar-user-bottom">
          <div className="sidebar-avatar">
            <img src="https://ui-avatars.com/api/?name=Admin+Profile&background=0066ff&color=fff" alt="Avatar" />
          </div>
          <div>
            <p className="profile-name" style={{ color: 'white' }}>AASTU Admin Profile</p>
            <p className="user-status-pill">Gebeya Console Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
