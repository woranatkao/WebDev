import React from 'react';
import { Trophy, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import RatingChart from '@/components/dashboard/RatingChart';

const Dashboard = () => {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome back, Student</h1>
      
      {/* Stats Grid */}
      <div className="grid-cols-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
        <StatsCard 
          title="Current Rating" 
          value="1,200" 
          icon={<Trophy size={24} />} 
          trend="up"
          trendValue="50"
        />
        <StatsCard 
          title="Problems Solved" 
          value="142" 
          icon={<CheckCircle size={24} />} 
          trend="up"
          trendValue="12"
        />
        <StatsCard 
          title="Study Time" 
          value="24h" 
          icon={<Clock size={24} />} 
          trend="up"
          trendValue="4h"
        />
        <StatsCard 
          title="Accuracy" 
          value="78%" 
          icon={<TrendingUp size={24} />} 
          trend="down"
          trendValue="2%"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid-cols-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div>
          <RatingChart />
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingBottom: '1rem',
                borderBottom: item !== 4 ? '1px solid rgba(255,255,255,0.05)' : 'none'
              }}>
                <div>
                  <p style={{ fontWeight: 500 }}>Calculus: Derivatives</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>2 hours ago</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--success)', fontWeight: 600 }}>+15 ELO</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Score: 8/10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
