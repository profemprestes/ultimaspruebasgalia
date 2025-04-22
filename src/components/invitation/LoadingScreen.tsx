"use client";

import React, { useState, useEffect } from "react";
import "@/styles/loading-screen.css";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const getConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 50; i++) {
      confetti.push({
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 10 + 5}px`,
        rotation: `${Math.random() * 360}deg`,
        duration: `${Math.random() * 3 + 2}s`,
        delay: `${Math.random()}s`,
      });
    }
    return confetti;
  };

  const getBalloons = () => {
    const balloons = [];
    for (let i = 0; i < 10; i++) {
      balloons.push({
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 50 + 30}px`,
        height: `${Math.random() * 70 + 50}px`,
        duration: `${Math.random() * 5 + 5}s`,
        delay: `${Math.random()}s`,
      });
    }
    return balloons;
  };

  const confettiList = getConfetti();
  const balloonList = getBalloons();

  return (
    <div className={`loader-container ${loading ? "" : "loader-exit"}`}>
      <div className="loader-background"></div>
      <div className="confetti-container">
        {confettiList.map((style, index) => (
          <div
            key={index}
            className="confetti"
            style={{
              "--left": style.left,
              "--size": style.size,
              "--rotation": style.rotation,
              "--duration": style.duration,
              "--delay": style.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="balloon-container">
        {balloonList.map((style, index) => (
          <div
            key={index}
            className="balloon"
            style={{
              left: style.left,
              width: style.width,
              height: style.height,
              duration: style.duration,
              delay: style.delay,
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
