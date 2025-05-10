// FallingDollars.tsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const FallingDollars: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 20 },
          move: {
            direction: 'bottom',
            speed: 2,
          },
          shape: {
            type: 'image',
            image: {
              src: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with your dollar image URL
              width: 32,
              height: 32,
            },
          },
          size: {
            value: 16,
          },
          opacity: {
            value: 0.8,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default FallingDollars;
