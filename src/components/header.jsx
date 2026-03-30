import React from 'react';
import { FaCarSide } from "react-icons/fa";

function Header() {
  return (
    <header style={{ background: '#4f46e5', padding: '40px 20px', color: 'white', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
        <FaCarSide style={{ fontSize: '3rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800' }}>UniRide</h1>
      </div>
      <p style={{ marginTop: '10px', opacity: 0.9 }}>Conectando estudantes para caronas seguras e económicas.</p>
    </header>
  );
}

export default Header;