import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', rating: 1000 },
  { name: 'Week 2', rating: 1050 },
  { name: 'Week 3', rating: 1040 },
  { name: 'Week 4', rating: 1100 },
  { name: 'Week 5', rating: 1150 },
  { name: 'Week 6', rating: 1200 },
];

const RatingChart = () => {
  return (
    <div className="card" style={{ height: '400px' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>Rating Progress</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="var(--text-secondary)" 
            tick={{ fill: 'var(--text-secondary)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="var(--text-secondary)" 
            tick={{ fill: 'var(--text-secondary)' }}
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 100', 'dataMax + 100']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }}
            itemStyle={{ color: 'var(--text-primary)' }}
          />
          <Line 
            type="monotone" 
            dataKey="rating" 
            stroke="var(--primary)" 
            strokeWidth={3}
            dot={{ r: 4, fill: 'var(--bg-primary)', stroke: 'var(--primary)', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: 'var(--primary)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
