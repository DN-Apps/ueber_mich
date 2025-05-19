import React from 'react';
import './TechSkills.css';

function TechSkills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Mendix Lowcode', level: 75 },
    { name: 'Outsystems Lowcode', level: 75 },
    { name: 'Azure DevOps', level: 75 },
    { name: 'Git Versionsverwaltung', level: 75 },
  ];

  return (
    <div className="tech-skills">
      <h2>Tech-Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechSkills;
