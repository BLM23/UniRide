import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import SearchBar from './components/searchBar.jsx';
import RideCard from './components/RideCard.jsx';
import RideForm from './components/RideForm.jsx';
import EmptyState from './components/EmptyState.jsx';

function App() {
  // Estado inicial com persistência (LocalStorage)
  const [rides, setRides] = useState(() => {
    const saved = localStorage.getItem('uniride_data');
    return saved ? JSON.parse(saved) : [
      { id: 1, motorista: "Lucas Silva", origem: "Centro", destino: "Campus", horario: "07:30", turno: "Manhã", vagas: 3, valor: "8,00" },
      { id: 2, motorista: "Ana Beatriz", origem: "Praça", destino: "Faculdade", horario: "18:45", turno: "Noite", vagas: 2, valor: "5,00" }
    ];
  });

  const [filters, setFilters] = useState({ origem: '', destino: '', turno: '' });
  const [formData, setFormData] = useState({ motorista: '', origem: '', destino: '', horario: '', turno: 'Manhã', vagas: '', valor: '' });

  // Salvar no LocalStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('uniride_data', JSON.stringify(rides));
  }, [rides]);

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  const clearFilters = () => setFilters({ origem: '', destino: '', turno: '' });
  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRides([{ ...formData, id: Date.now() }, ...rides]);
    setFormData({ motorista: '', origem: '', destino: '', horario: '', turno: 'Manhã', vagas: '', valor: '' });
    alert("Carona publicada com sucesso! 🚗");
  };

  const filteredRides = rides.filter(r => 
    r.origem.toLowerCase().includes(filters.origem.toLowerCase()) &&
    r.destino.toLowerCase().includes(filters.destino.toLowerCase()) &&
    (filters.turno === '' || r.turno === filters.turno)
  );

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <Header />
      <main className="container-layout">
        <aside className="sidebar">
          <SearchBar filters={filters} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
          <RideForm formData={formData} onFormChange={handleFormChange} onSubmit={handleSubmit} />
        </aside>
        
        <section className="content">
          <div className="section-header">
            <h2>Caronas Disponíveis</h2>
            <span className="count-badge">{filteredRides.length} caronas</span>
          </div>
          
          {filteredRides.length > 0 ? (
            <div className="rides-grid">
              {filteredRides.map(ride => <RideCard key={ride.id} ride={ride} />)}
            </div>
          ) : <EmptyState />}
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .container-layout { max-width: 1200px; margin: 0 auto; padding: 40px 20px; display: grid; grid-template-columns: 350px 1fr; gap: 30px; }
        .sidebar { display: flex; flex-direction: column; gap: 20px; }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .count-badge { background: #e2e8f0; padding: 4px 12px; border-radius: 20px; font-weight: bold; color: #475569; font-size: 0.8rem; }
        .rides-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        @media (max-width: 900px) { .container-layout { grid-template-columns: 1fr; } }
      ` }} />
    </div>
  );
}

export default App;