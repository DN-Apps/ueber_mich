import React, { useState } from 'react';
import './PrivatPortfolioDrawer.css';

const PrivatPortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tiles = [
    { id: 1, title: 'Sport', image: '/sport_laufen.jpg' },
    { id: 2, title: 'Wald', image: '/wald_kettensaege.jpg' },
    { id: 3, title: 'Heimwerken', image: '/werkzeugkoffer.png' },
    { id: 4, title: 'Aktivitäten', image: '/skydive.jpg' },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const scrollTiles = (direction) => {
    const container = document.querySelector('.privat-tiles-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="privat-toggle-button">
        <h1>Privat</h1>
      </button>
      <div className={`privat-portfolio-drawer ${isOpen ? 'open' : ''}`}>
        {/* Mobile Close Button */}
        {isOpen && (
          <button className="privat-close-button-mobile" onClick={toggleDrawer}>
            ✕
          </button>
        )}

        <div className="privat-tiles-container">
          {tiles.map((tile) => (
            <div className="privat-tile" key={tile.id}>
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>
            </div>
          ))}
        </div>

        {/* Desktop Close Button */}
        <button className="privat-scroll-button right" onClick={toggleDrawer}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default PrivatPortfolioDrawer;
