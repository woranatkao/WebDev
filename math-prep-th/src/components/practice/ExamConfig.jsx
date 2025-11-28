import React, { useState } from 'react';
import { Clock, BookOpen, BarChart } from 'lucide-react';

const ExamConfig = ({ onStart }) => {
  const [config, setConfig] = useState({
    topic: 'all',
    difficulty: 'medium',
    timeLimit: 30
  });

  const topics = [
    { id: 'all', name: 'All Topics' },
    { id: 'algebra', name: 'Algebra' },
    { id: 'geometry', name: 'Geometry' },
    { id: 'calculus', name: 'Calculus' },
    { id: 'combinatorics', name: 'Combinatorics' }
  ];

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Configure Practice Exam</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Topic Selection */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="var(--primary)" />
              Topic
            </div>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {topics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setConfig({ ...config, topic: topic.id })}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `1px solid ${config.topic === topic.id ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                  background: config.topic === topic.id ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  color: config.topic === topic.id ? 'var(--primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {topic.name}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart size={18} color="var(--accent)" />
              Difficulty
            </div>
          </label>
          <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem', borderRadius: '8px' }}>
            {['easy', 'medium', 'hard'].map(level => (
              <button
                key={level}
                onClick={() => setConfig({ ...config, difficulty: level })}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '6px',
                  background: config.difficulty === level ? 'var(--bg-primary)' : 'transparent',
                  color: config.difficulty === level ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textTransform: 'capitalize',
                  fontWeight: config.difficulty === level ? 600 : 400
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Time Limit */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} color="#22c55e" />
              Time Limit (Minutes)
            </div>
          </label>
          <input 
            type="range" 
            min="10" 
            max="120" 
            step="10" 
            value={config.timeLimit}
            onChange={(e) => setConfig({ ...config, timeLimit: parseInt(e.target.value) })}
            style={{ width: '100%', accentColor: 'var(--primary)' }}
          />
          <div style={{ textAlign: 'right', color: 'var(--primary)', fontWeight: 600 }}>
            {config.timeLimit} mins
          </div>
        </div>

        <button 
          className="btn btn-primary" 
          style={{ marginTop: '1rem', width: '100%' }}
          onClick={() => onStart(config)}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamConfig;
