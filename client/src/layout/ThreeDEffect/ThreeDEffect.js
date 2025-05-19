import React, { useState } from 'react';
import './ThreeDEffect.css';
import './portrait_transparent.png'

function ThreeDEffect() {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = (e.nativeEvent.offsetX / offsetWidth - 0.5) * 30; // Neigung auf X-Achse
    const y = (e.nativeEvent.offsetY / offsetHeight - 0.5) * -30; // Neigung auf Y-Achse
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 }); // Zurück zur Normalposition
  };

  return (
    <div 
      className="three-d-container" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="/portrait_transparent.png" 
        alt="3D Effekt" 
        style={{
          transform: `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
        }}
      />
      <div className='text'><h1>Daniel Nedic</h1></div>
    </div>
    
  );
}

export default ThreeDEffect;
