import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PrivatPortfolioDrawer.css';

const PrivatPortfolioDrawer = ({ isMobile = false }) => {
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

  const [activeTileId, setActiveTileId] = useState(tiles[0].id);

  const handleTileClick = (id) => {
    setActiveTileId(id === activeTileId ? null : id);
  };

  const activeTile = tiles.find((tile) => tile.id === activeTileId);

  return (
    <div className="privat-inline">
      <div className="privat-tiles-container">
        {tiles.map((tile) => {
          const isActive = activeTileId === tile.id;

          return (
            <div
              className={`privat-tile ${isActive ? 'active' : ''}`}
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
            >
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>

              {/* MOBILE: Details direkt unter der aktiven Kachel */}
              {isMobile && isActive && (
                <div className="privat-tiles-content privat-tiles-content-inline">
                  <h2>{tile.title}</h2>
                  <p>{tile.content}</p>
                  <p>{tile.target}</p>
                  <p>{tile.functionalities}</p>
                  <p>{tile.stack}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP: alter Detailbereich bleibt wie gehabt */}
      {!isMobile && activeTile && (
        <div className="privat-tiles-content">
          <h2>{activeTile.title}</h2>
          <p>{activeTile.content}</p>
          <p>{activeTile.target}</p>
          <p>{activeTile.functionalities}</p>
          <p>{activeTile.stack}</p>
        </div>
      )}
    </div>
  );
};

export default PrivatPortfolioDrawer;
