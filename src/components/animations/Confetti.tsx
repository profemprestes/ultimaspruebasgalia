"use client";
import React, { useEffect, useRef } from "react";

export const Confetti: React.FC = () => {
  const numberOfConfetti = 50;
  const confettiRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    confettiRef.current = Array.from({ length: numberOfConfetti }, (_, index) => {
      return document.createElement('div');
    });

    const container = document.querySelector(".confetti-container");
    if (container) {
      confettiRef.current.forEach((confetti, index) => {
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 5 + 5;
        const rotation = Math.random() * 360;

        confetti.className = "confetti";
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${x}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        container.appendChild(confetti);
      });
    }

    return () => {
      const container = document.querySelector(".confetti-container");
      if (container) {
        confettiRef.current.forEach(confetti => {
          container.removeChild(confetti);
        });
      }
    };
  }, []);

  return (
    <div className="confetti-container">
    </div>
  );
};
