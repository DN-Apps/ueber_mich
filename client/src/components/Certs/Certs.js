import React, { useState } from 'react'
import './Certs.css'
import Mendix from '../../assets/logos/rad_mendix.png'
import Stanley from '../../assets/logos/stanley.png'
import KMK from '../../assets/logos/kmk.PNG'

function Certs() {

    /** 
     * UI-State:
     * isModalOpen – steuert Sichtbarkeit des Modals
     * selectedCert – enthält das aktuell angeklickte Zertifikat
     * zoomed – ob das Zertifikat-Bild gezoomt dargestellt wird
     */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [zoomed, setZoomed] = useState(false);

    /** 
     * Schaltet zwischen normaler und gezoomter Bildanzeige um
     */
    const toggleZoom = () => setZoomed(prev => !prev);

    /**
     * Öffnet das Modal und speichert das angeklickte Zertifikat
     */
    const openModal = (cert) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    /**
     * Schließt das Modal und leert die Auswahl
     */
    const closeModal = () => {
        setSelectedCert(null);
        setIsModalOpen(false);
    };

    /**
     * Liste aller Zertifikate
     * - id: eindeutiger Schlüssel
     * - title: Titel zur Anzeige im Modal
     * - img: Bildquelle
     */
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

            {/* Zertifikatsliste – Bilder clickable zum Öffnen des Modals */}
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

            {/* Modal – wird nur angezeigt, wenn isModalOpen true UND ein Cert ausgewählt ist */}
            {isModalOpen && selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>

                    {/* verhindert, dass Klicks im Modal das Overlay schließen */}
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        {/* Zertifikatstitel */}
                        <h2>{selectedCert.title}</h2>

                        {/* Zertifikatsbild mit Zoom-Funktion */}
                        <img
                            src={selectedCert.img}
                            alt={selectedCert.title}
                            className={`modal-image ${zoomed ? 'zoomed' : ''}`}
                            onClick={toggleZoom}
                        />

                        {/* Schließen-Button */}
                        <button onClick={closeModal}>Schließen</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Certs
