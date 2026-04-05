import React from 'react';

function StatsCard({ title, value, icon: Icon, color }) {
  return (
    <div className="stats-card">
      <div className="stats-icon" style={{ background: color }}>
        <Icon />
      </div>
      <div className="stats-info">
        <h3>{title}</h3>
        <p className="stats-value">{value}</p>
      </div>
    </div>
  );
}

export default StatsCard;