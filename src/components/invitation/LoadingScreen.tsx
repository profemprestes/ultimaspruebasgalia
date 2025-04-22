"use client";

import React, { useState, useEffect } from "react";
import "@/styles/loading-screen.css";
import { Confetti } from "@/components/animations/Confetti";

interface BalloonStyle {
  left: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
  color: string;
}

const balloonColors = [
  '#73d1dd', // Light teal
  '#ffb347', // Light orange
  '#a7d1ab', // Pastel green
  '#fce18a', // Light gold
  '#ff726d', // Salmon
  '#b48bce', // Lavender
  '#f4306d', // Magenta
  '#5bca94', // Mint
];

const getRandomBalloonColor = () => {
  return balloonColors[Math.floor(Math.random() * balloonColors.length)];
};

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [balloons, setBalloons] = useState<BalloonStyle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => setLoading(false), 800);
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    const generateBalloons = () => {
      const newBalloons: BalloonStyle[] = [];
      for (let i = 0; i < 10; i++) {
        const color = getRandomBalloonColor();
        newBalloons.push({
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 50 + 30}px`,
          height: `${Math.random() * 70 + 50}px`,
          duration: `${Math.random() * 5 + 5}s`,
          delay: `${Math.random()}s`,
          color: color,
        });
      }
      setBalloons(newBalloons);
    };

    generateBalloons();
  }, []);

  return (
    <div className={`loader-container ${loading ? "" : "loader-exit"}`}>
      <div className="loader-background"></div>
      <Confetti numberOfConfetti={70}/>
      <div className="balloon-container">
        {balloons.map((style, index) => (
          <div
            key={index}
            className="balloon"
            style={{
              left: style.left,
              width: style.width,
              height: style.height,
              animationDuration: style.duration,
              animationDelay: style.delay,
              backgroundColor: style.color,
            } as React.CSSProperties}
          >
            <div className="balloon-string"></div>
          </div>
        ))}
      </div>
      <div className="loader-content">
        <div className="loader-image-container">
          <img
            src="/margarita.gif"
            alt="Daisy Flower"
            className="loader-image"
          />
        </div>
        <h1 className="loader-title">Galia's</h1>
        <h2 className="loader-subtitle">Loading Invitation</h2>
        <div className="loader-progress-container">
          <div className="loader-progress">
            <div
              className="loader-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="loader-progress-text">{progress}%</p>
        </div>
      </div>
    </div>
  );
};
