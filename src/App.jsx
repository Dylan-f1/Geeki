import { useState } from 'react'
import './App.css'
import AllGames from './AllGames.jsx'

function App() {
  const [showAllGames, setShowAllGames] = useState(false)

  if (showAllGames) {
    return <AllGames onBack={() => setShowAllGames(false)} />
  }

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
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>

          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Final Fantasy VII Rebirth</div>
            <button className="details-button">Voir les détails</button>
          </div>
        </div>

        <div className="pagination">1/4</div>
      </div>
      
      <button className="Allgames" onClick={() => setShowAllGames(true)}>All Games</button>      
      <div className="advertisement">PUB</div>
    </div>
  )
}

export default App
