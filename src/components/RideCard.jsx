import React from 'react';
import { FaUserCircle, FaWhatsapp, FaWallet } from "react-icons/fa";

function RideCard({ ride }) {
  return (
    <div className="ride-card">
      <div className="card-top">
        <div className="user-info">
          <FaUserCircle className="avatar" />
          <span className="driver-name">{ride.motorista}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="price-tag">R$ {ride.valor}</span>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 'bold' }}><FaWallet size={10}/> {ride.pagamento || 'Pix'}</div>
        </div>
      </div>
      <div className="route-info">
        <p><strong>De:</strong> {ride.origem} ➔ <strong>Para:</strong> {ride.destino}</p>
      </div>
      <button className="btn-wa" onClick={() => window.open(`https://wa.me/550000000000`)}>
        <FaWhatsapp /> Reservar Vaga
      </button>
      <style dangerouslySetInnerHTML={{ __html: `
        .ride-card { background: white; border-radius: 16px; padding: 18px; border: 1px solid #e2e8f0; margin-bottom: 15px; }
        .price-tag { color: #16a34a; font-weight: 800; font-size: 1.1rem; }
        .btn-wa { background: #25d366; color: white; border: none; padding: 12px; border-radius: 10px; width: 100%; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }
      ` }} />
    </div>
  );
}

export default RideCard;