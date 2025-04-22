"use client";
import React from "react";

export const Confetti: React.FC = () => {
  const numberOfConfetti = 50;

  const confetti = Array.from({ length: numberOfConfetti }, (_, index) => {
    const size = Math.random() * 8 + 4;
    const x = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 5 + 5;
    const rotation = Math.random() * 360;

    return {
      size,
      x,
      delay,
      duration,
      rotation,
    };
  });

  return (
    <div className="confetti-container">
      {confetti.map((c, index) => (
        <div
          key={index}
          className="confetti"
          style={{
            width: `${c.size}px`,
            height: `${c.size}px`,
            left: `${c.x}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            transform: `rotate(${c.rotation}deg)`,
          }}
        ></div>
      ))}
    </div>
  );
};
/