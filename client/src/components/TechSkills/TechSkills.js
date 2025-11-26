import React from 'react';
import './TechSkills.css';
import { useTranslation } from 'react-i18next';

import OutSystemsLogo from '../../assets/logos/os.png';
import MendixLogo from '../../assets/logos/mendix.png';
import AzureDevOpsLogo from '../../assets/logos/ado.svg';

const logoMap = {
  ReactJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  NodeJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Service Studio': OutSystemsLogo,
  'Service Center': OutSystemsLogo,
  LifeTime: OutSystemsLogo,
  'Studio Pro': MendixLogo,
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  GIT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Azure DevOps': AzureDevOpsLogo,
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
};

function TechSkills() {
  const { t } = useTranslation();
  const techStacks = t('techStacks', { returnObjects: true });
  const techLabels = t('techLabels', { returnObjects: true });

  return (
    <div className="tech-stacks-container">
      <h2>{t('techStacksTitle')}</h2>
      <div className="tech-stacks-grid">
        {techStacks.map((stack, idx) => (
          <div className="tech-stack-column" key={idx}>
            <h3>{stack.category}</h3>
            {stack.layers.map((layer, i) => (
              <div key={i}>
                {layer.technologies.map((tech, j) => (
                  <div className="tech-item" key={j}>
                    <img src={logoMap[tech]} alt={tech} />
                    <span>{layer.title}: {techLabels[tech] || tech}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechSkills;
