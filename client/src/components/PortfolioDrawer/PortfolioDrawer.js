import React, { useState } from 'react';
import './PortfolioDrawer.css';

const PortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tiles = [
    { id: 1, title: 'Monteurzimmer Nedic', image: '/home_new.jpeg' },
    { id: 2, title: 'Digitale Visitenkarte', image: '/dgv.jpeg' },
    { id: 3, title: 'Application Portal', image: '/application_portal.jpeg' },
    { id: 4, title: 'Chogan Parfum', image: '/chogan.jpeg' },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const scrollTiles = (direction) => {
    const container = document.querySelector('.tiles-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="toggle-button">
        <h1>Projekte-Portfolio</h1>
      </button>

      <div className={`portfolio-drawer ${isOpen ? 'open' : ''}`}>

        {/* Nur in Mobile View sichtbarer Close-Button */}
        <button className="close-button-mobile" onClick={toggleDrawer}>
          ✕
        </button>

        <div className="tiles-container">
          {tiles.map((tile) => (
            <div className="tile" key={tile.id}>
              <img src={tile.image} alt={tile.title} />
              <p>{tile.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button left" onClick={toggleDrawer}>
          ⬅
        </button>
      </div>
    </div>
  );
};

export default PortfolioDrawer;
