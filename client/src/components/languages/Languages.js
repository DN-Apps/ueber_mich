import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import './Languages.css';
import { useTranslation } from 'react-i18next';

const COLORS = ['#2ea17b', '#e0e0e0'];

function LanguageDonut({ name, level, flag }) {
  const data = [
    { name: 'Level', value: level },
    { name: 'Rest', value: 100 - level },
  ];

  return (
    <div className="donut-chart">
      <div className="donut-header">
        <img src={flag} alt={`${name} flag`} className="flag-icon" />
        <h4 className="language-name">{name}</h4>
      </div>
      <div className="donut-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={50}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-label">{level}%</div>
      </div>
    </div>
  );
}

function Languages() {
  const { t } = useTranslation();
  const skills = t('languages.skills', { returnObjects: true });

  return (
    <div className="languages">
      <h2>{t('languages.title')}</h2>
      <div className="donut-wrapper">
        {skills.map((skill, index) => (
          <LanguageDonut
            key={index}
            name={skill.name}
            level={skill.level}
            flag={skill.flag}
          />
        ))}
      </div>
    </div>
  );
}

export default Languages;
