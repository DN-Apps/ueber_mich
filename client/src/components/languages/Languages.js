import React from 'react';
import './Languages.css';
import CategoryContent from '../CategoryContent/CategoryContent';

function Languages() {

  const skills = [
    { name: 'Deutsch', level: 100 },
    { name: 'Serbisch', level: 90 },
    { name: 'Englisch', level: 90 },
    { name: 'Französisch', level: 50 },
    { name: 'Italienisch', level: 30 }
  ];


  return (
    <div className="languages">
      <h2>Sprachen:</h2>
      {/*<CategoryContent category='languages'></CategoryContent>*/}
      <div className="lang-skills">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
            <div className="lang-skill-bar">
              <div
                className="lang-skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>


    </div>
  );
}

export default Languages;
