// Portrait.js
import React, { useState } from 'react';
import './Portrait.css';
import portraitSmall from './portrait.png'; // kleines Bild
import portraitLarge from './portrait_transparent.png'; // großes Bild

function Portrait() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="portrait-container">
      <img
        src={portraitLarge}
        alt="Portrait"
        className="portrait-thumbnail"
        onClick={openModal}
      />


      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={portraitLarge}
              alt="Großes Portrait"
              className="portrait-large"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Portrait;
