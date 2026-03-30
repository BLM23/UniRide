import React from 'react';
import { FaCarSide } from "react-icons/fa";

function Header() {
  return (
    <header style={{ background: '#4f46e5', padding: '30px 20px', color: 'white', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
        <FaCarSide style={{ fontSize: '2.5rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-1px' }}>UniRide</h1>
      </div>
      <p style={{ margin: 0, opacity: 0.9, fontSize: '1.1rem' }}>Sua carona universitária segura e econômica</p>
    </header>
  );
}

export default Header;