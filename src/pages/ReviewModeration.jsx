import React, { useState } from 'react';
import { 
  Search, Bell, Settings as SettingsIcon, Star, 
  Flag, ChevronRight, MoreVertical, Check, Trash2, 
  AlertCircle, Sparkles, User, Info, CheckSquare, 
  MoreHorizontal, ChevronDown, Clock, CheckCircle2,
  ShieldCheck, XSquare
} from 'lucide-react';

const reviews = [
  { 
    id: 1, 
    user: 'Alex Rivera', 
    time: '2 hours ago',
    rating: 1,
    product: 'HERITAGE VARSITY JACKET',
    content: (
      <>
        "This jacket is absolute <span className="redacted">[REDACTED]</span>. Don't waste your money. 
        The quality is a joke and the staff at the bookstore are <span className="redacted">[REDACTED]</span> to 
        deal with. Avoid at all costs!"
      </>
    ),
    badge: 'OFFENSIVE CONTENT',
    badgeType: 'offensive',
    cardType: 'urgent',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=fca5a5&color=fff'
  },
  { 
    id: 2, 
    user: 'Jordan Tech_01', 
    time: '5 hours ago',
    rating: 5,
    product: 'QUANTUM LAPTOP STAND',
    content: '"Amazing product. Best ever. Buy now. High quality. Super fast shipping. Five stars for sure. Recommended to all students."',
    badge: 'FAKE REVIEW PATTERN',
    badgeType: 'fake',
    cardType: 'warning',
    note: 'IP matches 4 other accounts created within the last 24 hours.',
    avatar: 'https://ui-avatars.com/api/?name=Jordan+Tech&background=bfdbfe&color=fff'
  },
  { 
    id: 3, 
    user: 'Marcus Chen', 
    time: 'Yesterday',
    rating: 4,
    product: 'ORGANIC COTTON TOTE',
    content: '"A bit smaller than I expected from the photos, but the material is very thick and sturdy. Using it for my heavy textbooks and it\'s holding up well."',
    avatar: 'https://ui-avatars.com/api/?name=Marcus+Chen&background=cbd5e1&color=fff'
  },
];

export default function ReviewModeration() {
  const [activeQueue, setActiveQueue] = useState('All Reviews');
  const [activeDept, setActiveDept] = useState('Academic Apparel');

  return (
    <div className="dashboard-content">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="search-wrapper">
          <Search size={18} className="text-secondary" />
          <input type="text" placeholder="Search reviews, users, or products..." className="search-input" />
        </div>
        <div className="top-actions">
          <button className="icon-btn" style={{ position: 'relative' }}>
            <Bell size={20} />
            <div className="w-2 h-2 rounded-full bg-red-500 absolute top-1 right-1 border border-white"></div>
          </button>
          <button className="icon-btn"><SettingsIcon size={20} /></button>
          <div style={{ width: '1px', height: '24px', background: '#e2e8f0', margin: '0 8px' }}></div>
          <button className="btn-dark" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px', borderRadius: '30px', background: '#0b1426', fontSize: '12px', color: 'white' }}>
             <ShieldCheck size={16} />
             Admin Profile
          </button>
        </div>
      </header>

      {/* Header with Mini Stats */}
      <header className="flex justify-between items-start mb-16">
        <div>
          <h1 className="page-title" style={{ fontSize: '56px', lineHeight: '0.85', fontWeight: '900', letterSpacing: '-2px' }}>Reviews <br /><span style={{ color: '#0066ff' }}>& Ratings</span></h1>
          <p className="sub-header" style={{ maxWidth: '520px', marginTop: '16px', fontSize: '15px' }}>
            Content moderation hub for campus e-commerce. Protect the community by managing flags and maintaining review integrity.
          </p>
        </div>
        <div className="mini-stats">
          <div className="mini-stat-card red" style={{ width: '120px', padding: '16px' }}>
            <span className="mini-value text-3xl">24</span>
            <span className="mini-label">Pending Flags</span>
          </div>
          <div className="mini-stat-card" style={{ width: '120px', padding: '16px' }}>
            <span className="mini-value text-3xl" style={{ color: '#0066ff' }}>98%</span>
            <span className="mini-label">Trust Score</span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="review-page-layout">
        {/* Inner Sidebar */}
        <aside className="inner-sidebar">
          <div className="inner-sidebar-section">
            <span className="inner-sidebar-title">Priority Queue</span>
            <div className="space-y-1">
              {[
                { label: 'All Reviews', count: null, checked: true },
                { label: 'Flagged Content', count: 14, checked: false },
                { label: 'Low Rating (< 2*)', count: null, checked: false }
              ].map((link) => (
                <div 
                  key={link.label}
                  className={`sidebar-link ${activeQueue === link.label ? 'active' : ''}`}
                  onClick={() => setActiveQueue(link.label)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${link.checked || activeQueue === link.label ? 'bg-blue border-blue text-white' : 'border-slate-300'}`}>
                       {(link.checked || activeQueue === link.label) && <Check size={14} />}
                    </div>
                    {link.label}
                  </div>
                  {link.count && <span className="link-count" style={{ borderRadius: '4px' }}>{link.count}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="inner-sidebar-section">
            <span className="inner-sidebar-title">Departments</span>
            <div className="space-y-1">
              {['Academic Apparel', 'Tech Accessories', 'Campus Gifts'].map((dept) => (
                <div 
                  key={dept}
                  className={`sidebar-link ${activeDept === dept ? 'active' : ''}`}
                  onClick={() => setActiveDept(dept)}
                >
                  {dept}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Review List */}
        <main className="review-list flex-1">
          {reviews.map((review) => (
            <div key={review.id} className={`review-card ${review.cardType || ''}`}>
              {review.badge && (
                <div className={`review-badge ${review.badgeType}`}>
                   <AlertCircle size={10} />
                  {review.badge}
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img src={review.avatar} alt={review.user} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-xl mb-0">{review.user}</h4>
                    <span className="text-secondary text-sm font-medium">• {review.time}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'} />
                      ))}
                    </div>
                    <span className="text-blue text-xs font-black uppercase tracking-widest">{review.product}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-800 text-xl font-medium leading-relaxed italic my-6 px-2">
                {review.content}
              </p>

              {review.note && (
                <div className="moderator-note" style={{ background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-slate-200 rounded flex items-center justify-center">
                         <Info size={12} className="text-slate-600" />
                      </div>
                      <span className="uppercase text-[10px] tracking-tighter">Moderator Note:</span>
                      <span className="font-bold text-slate-700">{review.note}</span>
                   </div>
                </div>
              )}

              <div className="flex items-center gap-4 mt-8">
                <button className="btn-primary" style={{ padding: '12px 32px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', background: '#0066ff', color: 'white', border: 'none', fontWeight: '700' }}>
                   <CheckCircle2 size={18} /> Keep
                </button>
                <button className="btn-reject" style={{ padding: '12px 32px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', border: '2px solid #ef4444', background: 'transparent', color: '#ef4444', fontWeight: '700' }}>
                   <XSquare size={18} /> Delete
                </button>
                <div className="flex items-center gap-2 text-[#64748b] font-bold uppercase text-[11px] cursor-pointer hover:underline px-4">
                    <AlertCircle size={16} /> Warn User
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Floating Sparkle Button */}
      <button className="btn-sparkle" style={{ transform: 'scale(1.2)' }}>
        <Sparkles size={24} />
      </button>
    </div>
  );
}
