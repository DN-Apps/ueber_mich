import React from 'react';
import './AboutMe.css';
import CategoryContent from '../CategoryContent/CategoryContent';

function AboutMe() {
  return (
    <div className="about-me">
      <h2>Über mich:</h2>
      <CategoryContent category='aboutme'></CategoryContent>
    </div>
  );
}

export default AboutMe;
