import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Geeki</h1>
      
      <div className="search-bar">
        <div className="search-input">Barre de Recherche</div>
        <div className="filters">Filtres</div>
      </div>

      <div className="trending-section">
        <h2>Tendance</h2>
        
        <div className="games-grid">
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Nom du jeu</div>
            <button className="details-button">Voir les détails</button>
          </div>

          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Nom du jeu</div>
            <button className="details-button">Voir les détails</button>
          </div>
        </div>

        <div className="pagination">1/4</div>
      </div>

      <div className="advertisement">PUB</div>
    </div>
  )
}

export default App
