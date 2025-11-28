import React from 'react';

const StatsCard = ({ title, value, icon, trend, trendValue }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{title}</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</h3>
        </div>
        <div style={{ 
          padding: '0.5rem', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '8px',
          color: 'var(--primary)'
        }}>
          {icon}
        </div>
      </div>
      
      {trend && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
          <span style={{ 
            color: trend === 'up' ? 'var(--success)' : 'var(--error)',
            fontWeight: 500
          }}>
            {trend === 'up' ? '+' : ''}{trendValue}
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>from last week</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
