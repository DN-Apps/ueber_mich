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
      description: t('portfolio.monteur.description'),
      target: t('portfolio.monteur.target'),
      functionalities: t('portfolio.monteur.functionalities'),
      stack: t('portfolio.monteur.stack')
    },
    {
      id: 2,
      title: t('portfolio.dgv.title'),
      image: '/dgv.jpeg',
      description: t('portfolio.dgv.description'),
      target: t('portfolio.dgv.target'),
      functionalities: t('portfolio.dgv.functionalities'),
      stack: t('portfolio.dgv.stack')
    },
    {
      id: 3,
      title: t('portfolio.portal.title'),
      image: '/application_portal.jpeg',
      description: t('portfolio.portal.description'),
      target: t('portfolio.portal.target'),
      functionalities: t('portfolio.portal.functionalities'),
      stack: t('portfolio.portal.stack')
    },
    {
      id: 4,
      title: t('portfolio.chogan.title'),
      image: '/geplant.jpg',
      description: t('portfolio.chogan.description'),
      target: t('portfolio.chogan.target'),
      functionalities: t('portfolio.chogan.functionalities'),
      stack: t('portfolio.chogan.stack')
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
            <p>{selectedTile.target}</p>
            <p>{selectedTile.functionalities}</p>
            <p>{selectedTile.stack}</p>
          </div>
        )}

        <button className="scroll-button left" onClick={toggleDrawer}>⬅</button>
      </div>
    </div>
  );
};

export default PortfolioDrawer;