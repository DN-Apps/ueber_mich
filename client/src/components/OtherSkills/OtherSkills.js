import React from 'react';
import './OtherSkills.css';
import CategoryContent from '../CategoryContent/CategoryContent';

function OtherSkills() {
  const skills = ['Teamfähigkeit', 'Projektmanagement', 'Agiles Arbeiten'];

  return (
    <div className="other-skills">
      <CategoryContent category='otherskills'></CategoryContent>
    </div>
  );
}

export default OtherSkills;
