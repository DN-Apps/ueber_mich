import React, { useState } from 'react';
import './PortfolioDrawer.css';

const PortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTileId, setSelectedTileId] = useState(null);

  const tiles = [
    {
      id: 1,
      title: 'Monteurzimmer Nedic',
      image: '/home_new.jpeg',
      description: 'Ein Projekt zur Bereitstellung von Monteurunterkünften mit moderner Ausstattung und einfacher Buchungsoption.'
    },
    {
      id: 2,
      title: 'Digitale Visitenkarte',
      image: '/dgv.jpeg',
      description: 'Die digitale Visitenkarte für modernes Netzwerken – schnell, stilvoll und smart.'
    },
    {
      id: 3,
      title: 'Application Portal',
      image: '/application_portal.jpeg',
      description: 'Ein Bewerbungsportal zur zentralen Verwaltung und Übersicht von Bewerbungsunterlagen.'
    },
    {
      id: 4,
      title: 'Chogan Parfum',
      image: '/chogan.jpeg',
      description: 'Ein E-Commerce-Projekt zur Darstellung und Vermarktung exklusiver Parfümprodukte von Chogan.'
    },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setSelectedTileId(null); // Reset on open/close
  };

  const handleTileClick = (id) => {
    setSelectedTileId(prevId => (prevId === id ? null : id));
  };

  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

  return (
    <div>
      <button onClick={toggleDrawer} className="toggle-button">
        <h1>Projekte-Portfolio</h1>
      </button>

      <div className={`portfolio-drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-button-mobile" onClick={toggleDrawer}>
          ✕
        </button>

        <div className="tiles-container">
          {tiles.map((tile) => (
            <div
              className={`tile ${selectedTileId === tile.id ? 'active' : ''}`}
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
            >
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>
            </div>
          ))}
        </div>

        {selectedTile && (
          <div className="tile-content">
            <h2>{selectedTile.title}</h2>
            <p>{selectedTile.description}</p>
          </div>
        )}

        <button className="scroll-button left" onClick={toggleDrawer}>
          ⬅
        </button>
      </div>
    </div>
  );
};

export default PortfolioDrawer;
