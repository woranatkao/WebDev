import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ 
      borderBottom: '1px solid rgba(255,255,255,0.05)', 
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(15, 23, 42, 0.8)'
    }}>
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary), #818cf8)', 
            padding: '8px', 
            borderRadius: '8px',
            display: 'flex'
          }}>
            <BookOpen size={24} color="white" />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
            MathMaster <span className="text-gradient">TH</span>
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link to="/dashboard" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Dashboard</Link>
          <Link to="/practice" style={{ color: 'var(--text-secondary)' }}>Practice</Link>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>Mock Exams</a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>Leaderboard</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
            <Trophy size={16} color="var(--accent)" />
            <span style={{ fontWeight: 600, color: 'var(--accent)' }}>1200</span>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
