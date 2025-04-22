"use client";
import React from "react";

export const DaisyFlower: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <img
      className={className}
      src="/margarita.gif"
      alt="Daisy Flower"
      style={{ width: '100px', height: '100px' }} // Adjust size as needed
    />
  );
};
