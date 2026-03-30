import React from 'react';
import { FaPlusCircle, FaWallet } from "react-icons/fa";

function RideForm({ formData, onFormChange, onSubmit }) {
  return (
    <div className="card-ui">
      <h3 className="card-title" style={{ color: '#4f46e5' }}><FaPlusCircle /> Oferecer Carona</h3>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="motorista" placeholder="Nome do Motorista" value={formData.motorista} onChange={onFormChange} required className="styled-input" />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input type="text" name="origem" placeholder="Origem" value={formData.origem} onChange={onFormChange} required className="styled-input" />
          <input type="text" name="destino" placeholder="Destino" value={formData.destino} onChange={onFormChange} required className="styled-input" />
        </div>

        <div className="input-group">
          <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}><FaWallet /> Pagamento</label>
          <select name="pagamento" value={formData.pagamento || 'Pix'} onChange={onFormChange} className="styled-input">
            <option value="Pix">Pix</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão">Cartão / App</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input type="number" name="vagas" placeholder="Vagas" value={formData.vagas} onChange={onFormChange} required className="styled-input" />
          <input type="text" name="valor" placeholder="Valor R$" value={formData.valor} onChange={onFormChange} required className="styled-input" />
        </div>

        <button type="submit" className="btn-submit">Publicar Carona</button>
      </form>

      <style dangerouslySetInnerHTML={{ __html: `
        .btn-submit { background: #4f46e5; color: white; border: none; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 5px; }
        .btn-submit:hover { background: #4338ca; }
      ` }} />
    </div>
  );
}

export default RideForm;