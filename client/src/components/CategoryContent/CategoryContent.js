import React from 'react';
import { useTranslation } from 'react-i18next';
import './CategoryContent.css';

function CategoryContent() {
  const { t } = useTranslation();

  const stacks = t('agileMethods.stacks', { returnObjects: true });

  return (
    <div className="category-content">
      <h2>{t('agileMethods.title')}</h2>
      <div className="category-grid">
        {stacks.map((stack, idx) => (
          <div className="category-column" key={idx}>
            <h3>{stack.title}</h3>
            <div className="category-items">
              {stack.technologies.map((tech, i) => (
                <div className="category-item" key={i}>
                  <img src={tech.logo} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryContent;
