import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PortfolioDrawer.css';

const PortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTileId, setSelectedTileId] = useState(null);
  const { t } = useTranslation();

  const tiles = [
    {
      id: 1,
      title: t('portfolio.monteur.title'),
      image: '/home_new.jpeg',
      description: t('portfolio.monteur.description')
    },
    {
      id: 2,
      title: t('portfolio.dgv.title'),
      image: '/dgv.jpeg',
      description: t('portfolio.dgv.description')
    },
    {
      id: 3,
      title: t('portfolio.portal.title'),
      image: '/application_portal.jpeg',
      description: t('portfolio.portal.description')
    },
    {
      id: 4,
      title: t('portfolio.chogan.title'),
      image: '/chogan.jpeg',
      description: t('portfolio.chogan.description')
    },
  ];

  const toggleDrawer = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    setSelectedTileId(nextState ? tiles[0].id : null); // Erstes Tile beim Öffnen aktivieren
  };


  const handleTileClick = (id) => {
    setSelectedTileId(prevId => (prevId === id ? null : id));
  };

  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

  return (
    <div>
      <button onClick={toggleDrawer} className="toggle-button">
        <h1>{t('portfolio.button')}</h1>
      </button>

      <div className={`portfolio-drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-button-mobile" onClick={toggleDrawer}>✕</button>

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

        <button className="scroll-button left" onClick={toggleDrawer}>⬅</button>
      </div>
    </div>
  );
};

export default PortfolioDrawer;