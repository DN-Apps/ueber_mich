import React, { useState } from 'react'
import './Certs.css'
import Mendix from '../../assets/logos/rad_mendix.png'
import Stanley from '../../assets/logos/stanley.png'
import KMK from '../../assets/logos/kmk.PNG'

function Certs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [zoomed, setZoomed] = useState(false);
    const toggleZoom = () => setZoomed(prev => !prev);


    const openModal = (cert) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCert(null);
        setIsModalOpen(false);
    };

    const certs = [
        {
            id: 1,
            title: "Mendix RAD",
            img: Mendix
        },
        {
            id: 2,
            title: "Stanley Security",
            img: Stanley
        },
        {
            id: 3,
            title: "KMK English B2",
            img: KMK
        }
    ];

    return (
        <div className='certs-container'>
            <div className='certs-list'>
                {certs.map((cert) => (
                    <img
                        key={cert.id}
                        src={cert.img}
                        alt={cert.title}
                        className="certs-icon"
                        onClick={() => openModal(cert)}
                    />
                ))}
            </div>

            {isModalOpen && selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedCert.title}</h2>
                        <img
                            src={selectedCert.img}
                            alt={selectedCert.title}
                            className={`modal-image ${zoomed ? 'zoomed' : ''}`}
                            onClick={toggleZoom}
                        />

                        <button onClick={closeModal}>Schließen</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Certs
