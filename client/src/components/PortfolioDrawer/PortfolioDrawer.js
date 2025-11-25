import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PortfolioDrawer.css';

const PortfolioDrawer = ({ isMobile = false }) => {
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

  const [selectedTileId, setSelectedTileId] = useState(tiles[0].id);

  const handleTileClick = (id) => {
    setSelectedTileId(prevId => (prevId === id ? null : id));
  };

  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

  return (
    <div className="portfolio-inline">
      <div className="tiles-container">
        {tiles.map((tile) => {
          const isActive = selectedTileId === tile.id;

          return (
            <div
              className={`tile ${isActive ? 'active' : ''}`}
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
            >
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>

              {/* MOBILE: Details direkt unter der aktiven Kachel */}
              {isMobile && isActive && (
                <div className="tile-content tile-content-inline">
                  <h2>{tile.title}</h2>
                  <p>{tile.description}</p>
                  <p>{tile.target}</p>
                  <p>{tile.functionalities}</p>
                  <p>{tile.stack}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP / TABLET: alter Detailbereich bleibt erhalten */}
      {!isMobile && selectedTile && (
        <div className="tile-content">
          <h2>{selectedTile.title}</h2>
          <p>{selectedTile.description}</p>
          <p>{selectedTile.target}</p>
          <p>{selectedTile.functionalities}</p>
          <p>{selectedTile.stack}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioDrawer;
