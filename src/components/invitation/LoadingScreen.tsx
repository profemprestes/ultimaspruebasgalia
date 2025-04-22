"use client";
import React, { useState, useEffect } from "react";
import { DaisyFlower } from "@/components/animations/DaisyFlower";
import { Confetti } from "@/components/animations/Confetti";
import "@/styles/loading-screen.css";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <Confetti />
      <DaisyFlower className="daisy-flower" />
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
