import React from 'react';
import "./Socials.css";

function Socials() {
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
        }
    ];

    return (
        <div className='socials-container'>
            <div className='socials-list'>
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.path}
                        target="_blank"
                        rel="noopener noreferrer"
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