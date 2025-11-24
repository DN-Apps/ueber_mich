import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PortfolioDrawer.css';

const PortfolioDrawer = () => {

  // Zugriff auf die i18n-Übersetzungen
  const { t } = useTranslation();

  /**
   * Tile-Daten aus der Übersetzungsdatei.
   * Jede Kachel besteht aus:
   *  - Titel
   *  - Bildpfad
   *  - Beschreibung
   *  - Zielgruppe
   *  - Funktionalitäten
   *  - Tech-Stack
   * 
   *  Die Texte kommen aus der translation.json.
   */
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

  /**
   * selectedTileId — kontrolliert, welches Projekt geöffnet ist.
   * Standard: Erste Kachel geöffnet.
   */
  const [selectedTileId, setSelectedTileId] = useState(tiles[0].id);

  /**
   * Klick auf eine Kachel öffnet oder schließt den Inhalt.
   * Wenn dieselbe Kachel erneut geklickt wird → schließen.
   */
  const handleTileClick = (id) => {
    setSelectedTileId(prevId => (prevId === id ? null : id));
  };

  // Holt die aktuell ausgewählte Kachel
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

  return (
    <div className="portfolio-inline">

      {/* Grid mit allen Kacheln */}
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

      {/* Inhalt unter dem Grid — nur sichtbar, wenn ein Tile aktiv ist */}
      {selectedTile && (
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
