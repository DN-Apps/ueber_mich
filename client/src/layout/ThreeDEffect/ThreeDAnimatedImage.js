import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function ThreeDAnimatedImage() {
  const [props, set] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = (e.nativeEvent.offsetX / offsetWidth - 0.5) * 30; // Neigung auf der X-Achse
    const y = (e.nativeEvent.offsetY / offsetHeight - 0.5) * -30; // Neigung auf der Y-Achse
    set({ rotateX: y, rotateY: x, scale: 1.1 });
  };

  const handleMouseLeave = () => {
    set({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <animated.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '300px',
        height: '300px',
        backgroundImage: `url('daniel_bild.jpeg')`,
        backgroundSize: 'cover',
        borderRadius: '10px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        transform: props.scale.to((s) => `scale(${s})`),
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        rotateX: props.rotateX.to((r) => `${r}deg`),
        rotateY: props.rotateY.to((r) => `${r}deg`),
      }}
    />
  );
}

export default ThreeDAnimatedImage;
