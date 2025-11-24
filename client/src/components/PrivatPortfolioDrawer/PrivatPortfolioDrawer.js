import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PrivatPortfolioDrawer.css';

const PrivatPortfolioDrawer = () => {

  // Zugriff auf Übersetzungsfunktionen
  const { t } = useTranslation();

  /**
   * Array der privaten Aktivitäten.
   * Jede Kachel enthält:
   *  - Titel
   *  - Bild
   *  - Beschreibungstext
   *  - Zielsetzung
   *  - Aktivitäten / Funktionen
   *  - verwendete Tools / Stack (hier eher metaphorisch)
   *
   *  Alle Inhalte kommen aus der i18n-Übersetzungsdatei.
   */
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

  /**
   * Welcher Tile ist aktuell geöffnet?
   * Standard: Erste Kachel aktiv.
   */
  const [activeTileId, setActiveTileId] = useState(tiles[0].id);

  /**
   * Toggle-Mechanismus:
   * - Wenn man erneut auf die geöffnete Kachel klickt → schließen.
   */
  const handleTileClick = (id) => {
    setActiveTileId(id === activeTileId ? null : id);
  };

  // Ausgewählte Kachel extrahieren
  const activeTile = tiles.find((tile) => tile.id === activeTileId);

  return (
    <div className="privat-inline">

      {/* Grid mit allen privaten Aktivitäten */}
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

      {/* Detailbereich unterhalb der Tiles – nur sichtbar bei aktiver Kachel */}
      {activeTile && (
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
