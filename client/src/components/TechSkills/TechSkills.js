import React from 'react';
import './TechSkills.css';

import OutSystemsLogo from '../../assets/logos/os.png';
import MendixLogo from '../../assets/logos/mendix.png';
import AzureDevOpsLogo from '../../assets/logos/ado.svg';

const stackData = [
  {
    category: 'MERN',
    layers: [
      {
        title: 'Frontend',
        technologies: [
          {
            name: 'ReactJS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          },
        ],
      },
      {
        title: 'Backend',
        technologies: [
          {
            name: 'NodeJS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          },
          {
            name: 'Express',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          },
        ],
      },
      {
        title: 'DB',
        technologies: [
          {
            name: 'MySQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          },
          {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          },
        ],
      },
    ],
  },
  {
    category: 'Outsystems 11',
    layers: [
      {
        title: 'IDE',
        technologies: [
          {
            name: 'Service Studio',
            logo: OutSystemsLogo,
          },
        ],
      },
      {
        title: 'Environment-Management',
        technologies: [
          {
            name: 'Service Center',
            logo: OutSystemsLogo,
          },
        ],
      },
      {
        title: 'LifeTime',
        technologies: [
          {
            name: 'Applikationsmanagement',
            logo: OutSystemsLogo,
          },
        ],
      },
    ],
  },
  {
    category: 'Mendix 10',
    layers: [
      {
        title: 'IDE',
        technologies: [
          {
            name: 'Studio Pro',
            logo: MendixLogo,
          },
        ],
      },
      {
        title: 'DB',
        technologies: [
          {
            name: 'PostgreSQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          },
        ],
      },
      {
        title: 'Versionsverwaltung',
        technologies: [
          {
            name: 'GIT',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          },
          {
            name: 'Azure DevOps',
            logo: AzureDevOpsLogo,
          },
        ],
      },
    ],
  },
];

function TechSkills() {
  return (
    <div className="tech-stacks-container">
      <h2>TECH STACKs</h2>
      <div className="tech-stacks-grid">
        <div className="tech-stack-column">
          <h3>MERN</h3>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" />
            <span>Frontend: ReactJS</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
            <span>Backend: NodeJS</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
            <span>Backend: Express</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <span>DB: MySQL</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <span>DB: MongoDB</span>
          </div>
        </div>

        <div className="tech-stack-column">
          <h3>Outsystems 11</h3>
          <div className="tech-item">
            <img src={OutSystemsLogo} alt="OutSystems" />
            <span>IDE: Service Studio</span>
          </div>
          <div className="tech-item">
            <img src={OutSystemsLogo} alt="OutSystems" />
            <span>Environment-Management: <br></br>Outsystems Service Center</span>
          </div>
          <div className="tech-item">
            <img src={OutSystemsLogo} alt="OutSystems" />
            <span>Applikationsmanagement:<br></br>Outsystems LifeTime</span>
          </div>
        </div>

        <div className="tech-stack-column">
          <h3>Mendix 10</h3>
          <div className="tech-item">
            <img src={MendixLogo} alt="Mendix" />
            <span>IDE: Mendix Studio Pro</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
            <span>DB: PostgreSQL</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            <span>Versionsverwaltung: Git-Bash</span>
          </div>
          <div className="tech-item">
            <img src={AzureDevOpsLogo} alt="Azure DevOps" />
            <span>CI/CD: Azure DevOps</span>
          </div>
        </div>

        {/* <div className="tech-stack-column">
          <h3>MIDDLEWARE</h3>
        </div>

        <div className="tech-stack-column">
          <h3>OS</h3>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
            <span>Linux</span>
          </div>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" />
            <span>Windows</span>
          </div>
        </div>

        <div className="tech-stack-column">
          <h3>HARDWARE / NETWORK</h3>
          <div className="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
            <span>Cloud</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TechSkills;