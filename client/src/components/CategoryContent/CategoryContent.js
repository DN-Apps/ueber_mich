import React from 'react';
import './CategoryContent.css';
import OutSystemsLogo from '../../assets/logos/os.png';
import MendixLogo from '../../assets/logos/mendix.png';
import AzureDevOpsLogo from '../../assets/logos/ado.svg';

function CategoryContent() {
  const stacks = [
    {
      title: 'Produktvision & Backlog-Erstellung',
      technologies: [
        { name: 'Grobe Zieldefinition', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
        { name: 'Epics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'User Stories', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
        { name: 'Priorisierung', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      ],
    },
    {
      title: 'Sprint Planning, Review & Retrospektive',
      technologies: [
        { name: 'Product Backlog', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'Aufteilung in Tasks', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        { name: 'Vorstellung der Ergebnisse', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Feedback einholen', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Reflexion über Zusammenarbeit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
      ],
    },
    {
      title: 'Implementierung & Feedback (Sprints)',
      technologies: [
        { name: 'Umsetzung der User Stories mit Clean Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Tests', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'kontinuierliche Integration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ],
    },
    {
      title: 'Daily Stand-up (täglich)',
      technologies: [
        { name: 'Abgleich: Was wurde getan', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
        { name: 'Was steht an', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
        { name: 'Wo gibt es Blocker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      ],
    },
    {
      title: 'Release / Deployment (kontinuierlich oder sprintweise)',
      technologies: [
        { name: 'Software-Auslieferung nach Bedarf', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Automatisiert', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-plain.svg' },
      ],
    },
    {
      title: 'Wartung & Weiterentwicklung (laufend)',
      technologies: [
        { name: 'Bugfixing', logo: 'https://raw.githubusercontent.com/primer/octicons/main/icons/bug-16.svg' },
        { name: 'Neue Anforderungen', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
        { name: 'Technische Verbesserungen', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      ],
    },
  ];

  return (
    <div className="category-content">
      <h2>AGILE METHODEN</h2>
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