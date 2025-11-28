import React from 'react';
import { ArrowRight, Target, BarChart2, Book } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 0', 
        background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: '0.5rem 1rem', 
              background: 'rgba(56, 189, 248, 0.1)', 
              borderRadius: '20px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></span>
              <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600 }}>#1 Math Prep Platform in Thailand</span>
            </div>
            
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              lineHeight: 1.1, 
              marginBottom: '1.5rem',
              letterSpacing: '-1px'
            }}>
              Master Mathematics for <br />
              <span className="text-gradient">Entrance Exams</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Prepare for TriamUdom, MWIT, and A-Level with our adaptive question bank and real-time ELO rating system.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/practice" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Start Practicing <ArrowRight size={20} />
              </Link>
              <button className="btn btn-outline" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-cols-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <FeatureCard 
              icon={<Book size={32} color="var(--primary)" />}
              title="Massive Question Bank"
              description="Over 10,000+ curated problems covering all topics for high school entrance and university exams."
            />
            <FeatureCard 
              icon={<Target size={32} color="var(--accent)" />}
              title="Adaptive Practice"
              description="Our system adjusts difficulty based on your performance, ensuring you're always challenged just right."
            />
            <FeatureCard 
              icon={<BarChart2 size={32} color="#22c55e" />}
              title="Real-time Analytics"
              description="Track your progress with detailed stats and watch your ELO rating grow as you master new topics."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="card" style={{ transition: 'transform 0.2s' }}>
    <div style={{ 
      width: '60px', 
      height: '60px', 
      background: 'rgba(255,255,255,0.05)', 
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
  </div>
);

export default Home;
