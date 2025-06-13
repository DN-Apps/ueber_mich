import React, { useState } from 'react';
import './PrivatPortfolioDrawer.css';

const PrivatPortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTileId, setActiveTileId] = useState(null);

  const tiles = [
    {
      id: 1,
      title: 'Sport',
      image: '/sport_laufen.jpg',
      content: 'Ich betreibe regelmäßig Ausdauersport wie Laufen und Radfahren, um fit zu bleiben.',
    },
    {
      id: 2,
      title: 'Waldarbeiten',
      image: '/wald_kettensaege.jpg',
      content: 'Arbeiten mit der Motorsäge und in der Natur sind für mich ein schöner Ausgleich zum Büroalltag.',
    },
    {
      id: 3,
      title: 'Heimwerken',
      image: '/werkzeugkoffer.png',
      content: 'Ich baue gerne Möbel selbst, repariere Dinge im Haushalt und liebe es, handwerklich aktiv zu sein.',
    },
    {
      id: 4,
      title: 'Action & Abenteuer',
      image: '/skydive.jpg',
      content: 'Ich liebe Abenteuer wie Fallschirmspringen oder Klettern – Adrenalin ist mein Freund!',
    },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleTileClick = (id) => {
    setActiveTileId(id === activeTileId ? null : id); // Toggle-Mechanismus
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="privat-toggle-button">
        <h1>Privat</h1>
      </button>
      <div className={`privat-portfolio-drawer ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <button className="privat-close-button-mobile" onClick={toggleDrawer}>
            ✕
          </button>
        )}

        <div className="privat-tiles-container">
          {tiles.map((tile) => (
            <div
              className={`privat-tile ${activeTileId === tile.id ? 'active' : ''}`}
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
            >
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>
            </div>
          ))}
        </div>

        {activeTileId && (
          <div className="privat-tiles-content">
            <h2>{tiles.find((tile) => tile.id === activeTileId).title}</h2>
            <p>{tiles.find((tile) => tile.id === activeTileId).content}</p>
          </div>
        )}

        <button className="privat-scroll-button right" onClick={toggleDrawer}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default PrivatPortfolioDrawer;
