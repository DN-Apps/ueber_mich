import React from 'react';
import './Career.css';
import CategoryContent from '../CategoryContent/CategoryContent'
import Timeline from '../Timeline/Timeline';

function Career() {
  const careerSteps = [
    { year: 2020, description: 'Bachelor in Informatik - Universität XYZ' },
    { year: 2021, description: 'Junior Softwareentwickler bei Firma ABC' },
    { year: 2023, description: 'Fullstack-Entwickler bei Firma DEF' },
  ];

  return (
    <div className="career">
      <h2>Werdegang:</h2>
      {/*<CategoryContent category='career'></CategoryContent>*/}
      <Timeline></Timeline>

    </div>
  );
}

export default Career;
