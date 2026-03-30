import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";

function SearchBar({ filters, onFilterChange, onClearFilters }) {
  // Função para preencher o destino rapidamente
  const setQuickDestino = (local) => {
    onFilterChange({ target: { name: 'destino', value: local } });
  };

  return (
    <div className="card-ui">
      <h3 className="card-title"><FaSearch /> Encontrar Carona</h3>
      
      <div className="input-group">
        <label><FaMapMarkerAlt /> Destino</label>
        <input 
          type="text" 
          name="destino" 
          placeholder="Para onde você vai?" 
          value={filters.destino} 
          onChange={onFilterChange} 
          className="styled-input" 
        />
      </div>

      <div className="shortcuts">
        <button onClick={() => setQuickDestino('Rodoviária')} className="chip"><FaMapPin /> Rodoviária</button>
        <button onClick={() => setQuickDestino('Campus Central')} className="chip"><FaMapPin /> Campus Central</button>
      </div>

      <button onClick={onClearFilters} className="btn-clear">Ver todas as caronas</button>

      <style dangerouslySetInnerHTML={{ __html: `
        .card-ui { background: white; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .card-title { margin: 0 0 15px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; color: #1e293b; }
        .input-group { margin-bottom: 12px; }
        .input-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; margin-bottom: 4px; }
        .styled-input { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid #cbd5e1; background: white !important; color: #1e293b !important; }
        .shortcuts { display: flex; gap: 8px; margin-bottom: 15px; flex-wrap: wrap; }
        .chip { background: #f1f5f9; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; display: flex; align-items: center; gap: 5px; color: #475569; transition: 0.2s; }
        .chip:hover { background: #4f46e5; color: white; border-color: #4f46e5; }
        .btn-clear { width: 100%; padding: 10px; border: none; background: #eef2ff; color: #4f46e5; border-radius: 10px; cursor: pointer; font-weight: 700; }
      ` }} />
    </div>
  );
}

export default SearchBar;