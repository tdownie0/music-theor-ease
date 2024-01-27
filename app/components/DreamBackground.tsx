// DreamBackground.tsx
'use client';
// DreamBackground.tsx
import React from 'react';
import styles from './DreamBackground.module.css';

const DreamBackground: React.FC = () => {
  const numberOfCircles = 200; // Adjust the number of circles as needed
  const defaultSpeed = 2;
  const defaultAmplitude = 10;
  const defaultFrequency = 0.02;

  const renderCircles = () => {
    return Array.from({ length: numberOfCircles }).map((_, index) => {
      const randomX = Math.random().toString();
      const randomY = Math.random().toString();
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      const speed = Math.random() * 4 + defaultSpeed;
      const amplitude = Math.random() * 20 + defaultAmplitude;
      const frequency = Math.random() * 0.02 + defaultFrequency;

      return (
        <div
          key={index}
          style={{
            '--random-x': randomX,
            '--random-y': randomY,
            '--random-color': randomColor,
            '--speed': speed,
            '--amplitude': amplitude,
            '--frequency': frequency,
          }}
          className={styles.circle}
        ></div>
      );
    });
  };

  return <div className={styles.dreamBackground}>{renderCircles()}</div>;
};

export default DreamBackground;
