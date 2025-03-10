import './AllGames.css'

function AllGames({ onBack }) {
  return (
    <div className="app-container">
      <div className="header">
        <button onClick={onBack} className="back-button">Retour</button>
        <h1>Geeki</h1>
      </div>
      
      <div className="search-bar">
        <div className="search-input">Barre de Recherche</div>
        <div className="filters">Filtres</div>
      </div>

      <div className="trending-section">
        <h2>All Games</h2>
        
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
          <div className="game-card">
           <div className="game-image">Image</div>
           <div className="game-title">ARK</div>
           <button className="details-button">Voir les détails</button>
          </div> 
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Kingdom Come Delivrance II</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Overwatch</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">Valorant</div>
            <button className="details-button">Voir les détails</button>
          </div>
          <div className="game-card">
            <div className="game-image">Image</div>
            <div className="game-title">The Witcher</div>
            <button className="details-button">Voir les détails</button>
          </div>
        </div>
      </div>

      <div className="advertisement">PUB</div>
    </div>
  )
}

export default AllGames