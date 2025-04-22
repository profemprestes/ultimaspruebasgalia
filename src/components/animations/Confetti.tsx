"use client";
import React, { useEffect, useRef } from "react";

const confettiColors = [
  "#fce18a", // Light gold
  "#ff726d", // Salmon
  "#b48bce", // Lavender
  "#f4306d", // Magenta
  "#5bca94", // Mint
  "#ffb347", // Light orange
  "#a7d1ab", // Pastel green
  "#73d1dd", // Light teal
];

const getRandomColor = () => {
  return confettiColors[Math.floor(Math.random() * confettiColors.length)];
};

interface ConfettiProps {
  numberOfConfetti?: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ numberOfConfetti = 50 }) => {
  const confettiRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    confettiRef.current = Array.from({ length: numberOfConfetti }, () => {
      const confetti = document.createElement('div');
      confetti.className = "confetti";
      return confetti;
    });

    const container = document.querySelector(".confetti-container");
    if (container) {
      confettiRef.current.forEach((confetti, index) => {
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 5 + 5;
        const rotation = Math.random() * 360;
        const color = getRandomColor();

        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${x}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        confetti.style.backgroundColor = color;
        container.appendChild(confetti);
      });
    }

    return () => {
      const container = document.querySelector(".confetti-container");
      if (container) {
        confettiRef.current.forEach(confetti => {
          if (container.contains(confetti)) {
            container.removeChild(confetti);
          }
        });
      }
    };
  }, [numberOfConfetti]);

  return (
    <div className="confetti-container">
    </div>
  );
};
