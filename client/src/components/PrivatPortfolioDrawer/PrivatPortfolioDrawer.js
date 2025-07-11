import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PrivatPortfolioDrawer.css';

const PrivatPortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTileId, setActiveTileId] = useState(null);
  const { t } = useTranslation();

  const tiles = [
    {
      id: 1,
      title: t('privat.sport.title'),
      image: '/sport_laufen.jpg',
      content: t('privat.sport.content'),
      target: t('privat.sport.target'),
      functionalities: t('privat.sport.functionalities'),
      stack: t('privat.sport.stack')
    },
    {
      id: 2,
      title: t('privat.woods.title'),
      image: '/wald_kettensaege.jpg',
      content: t('privat.woods.content'),
      target: t('privat.woods.target'),
      functionalities: t('privat.woods.functionalities'),
      stack: t('privat.woods.stack')
    },
    {
      id: 3,
      title: t('privat.diy.title'),
      image: '/werkzeugkoffer.png',
      content: t('privat.diy.content'),
      target: t('privat.diy.target'),
      functionalities: t('privat.diy.functionalities'),
      stack: t('privat.diy.stack')
    },
    {
      id: 4,
      title: t('privat.adventure.title'),
      image: '/skydive.jpg',
      content: t('privat.adventure.content'),
      target: t('privat.adventure.target'),
      functionalities: t('privat.adventure.functionalities'),
      stack: t('privat.adventure.stack')
    },
  ];

  const toggleDrawer = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen && tiles.length > 0) {
      setActiveTileId(tiles[0].id);
    } else {
      setActiveTileId(null);
    }
  };

  const handleTileClick = (id) => setActiveTileId(id === activeTileId ? null : id);

  return (
    <div>
      <button onClick={toggleDrawer} className="privat-toggle-button">
        <h1>{t('privat.button')}</h1>
      </button>
      <div className={`privat-portfolio-drawer ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <button className="privat-close-button-mobile" onClick={toggleDrawer}>✕</button>
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
            <p>{tiles.find((tile) => tile.id === activeTileId).target}</p>
            <p>{tiles.find((tile) => tile.id === activeTileId).functionalities}</p>
            <p>{tiles.find((tile) => tile.id === activeTileId).stack}</p>
          </div>
        )}

        <button className="privat-scroll-button right" onClick={toggleDrawer}>➡</button>
      </div>
    </div>
  );
};

export default PrivatPortfolioDrawer;
