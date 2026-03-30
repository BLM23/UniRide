import React from 'react';
import { FaSearch } from 'react-icons/fa';

function EmptyState() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', background: '#f1f5f9', borderRadius: '12px', color: '#64748b' }}>
      <FaSearch style={{ fontSize: '2rem', marginBottom: '10px' }} />
      <h3>Nenhuma carona encontrada</h3>
      <p>Tente ajustar seus filtros de busca.</p>
    </div>
  );
}

export default EmptyState;