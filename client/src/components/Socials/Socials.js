import React from 'react';
import "./Socials.css";

function Socials() {

    /**
     * Liste aller Social-Media-Profile.
     * Jedes Element enthält:
     * - id: eindeutiger Schlüssel
     * - title: Name des Netzwerks (für alt-Text)
     * - img: Icon-URL
     * - path: Link zum Profil
     */
    const socials = [
        {
            id: 1,
            title: "Xing",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/XING_Logo.svg",
            path: "https://www.xing.com/profile/Daniel_Nedic/web_profiles"
        },
        {
            id: 2,
            title: "LinkedIn",
            img: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
            path: "https://www.linkedin.com/in/daniel-n-909b84368/"
        },
        {
            id: 3,
            title: "GitHub",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            path: "https://github.com/DN-Apps/"
        }
    ];

    return (
        /**
         * Container für die Social Icons.
         * Wird im Header zwischen Portrait und Certs angezeigt.
         */
        <div className='socials-container'>
            <div className='socials-list'>

                {/* Alle Social-Links werden dynamisch aus dem Array erzeugt */}
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.path}
                        target="_blank"               // Öffnet im neuen Tab
                        rel="noopener noreferrer"     // Sicherheitsrelevant bei target="_blank"
                        className="social-link"
                    >
                        <img
                            src={social.img}
                            alt={social.title}
                            className="social-icon"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Socials;
