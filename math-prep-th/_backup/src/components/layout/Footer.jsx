import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      padding: '3rem 0',
      marginTop: 'auto',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} MathMaster TH. All rights reserved.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Empowering Thai students to master Mathematics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
