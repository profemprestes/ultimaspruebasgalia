"use client";
import React from "react";

interface DaisyFlowerProps {
  className?: string;
}

export const DaisyFlower: React.FC<DaisyFlowerProps> = ({ className }) => {
  return (
    <img
      className={className}
      src="/margarita.gif"
      alt="Daisy Flower"
      style={{
        width: "100px",
        height: "100px",
        objectFit: "contain", // Added objectFit to maintain aspect ratio
      }}
    />
  );
};
