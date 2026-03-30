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
        <div className="price-box">
          <span className="price-tag">R$ {ride.valor}</span>
          <span className="payment-method"><FaWallet size={10} /> {ride.pagamento || 'Pix'}</span>
        </div>
      </div>
      
      <div className="route-info">
        <p><strong>De:</strong> {ride.origem}</p>
        <p><strong>Para:</strong> {ride.destino}</p>
      </div>

      <div className="card-footer">
        <span className="info-badge">{ride.horario}</span>
        <span className="info-badge">{ride.vagas} vagas</span>
        <span className="turno-tag">{ride.turno}</span>
      </div>

      <button className="btn-wa" onClick={() => window.open(`https://wa.me/550000000000`)}>
        <FaWhatsapp /> Reservar via WhatsApp
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .ride-card { background: white; border-radius: 16px; padding: 18px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px; transition: 0.2s; }
        .ride-card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px rgba(0,0,0,0.08); }
        .price-box { text-align: right; display: flex; flex-direction: column; }
        .payment-method { font-size: 0.65rem; color: #64748b; font-weight: bold; text-transform: uppercase; margin-top: 2px; }
        .info-badge { background: #f8fafc; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; color: #475569; border: 1px solid #e2e8f0; }
        .turno-tag { margin-left: auto; font-size: 0.75rem; font-weight: 800; color: #4f46e5; }
        .btn-wa { background: #25d366; color: white; border: none; padding: 12px; border-radius: 12px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; }
      ` }} />
    </div>
  );
}

export default RideCard;