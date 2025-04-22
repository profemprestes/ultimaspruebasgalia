"use client";
import React from "react";

export const DaisyFlower: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="12" fill="#FFEB3B" />
      <g>
        <circle cx="50" cy="18" r="7" fill="#A7D1AB" />
        <circle
          cx="50"
          cy="18"
          r="5"
          fill="white"
          style={{ animationDelay: "0s" }}
        />
      </g>
      <g>
        <circle cx="82" cy="50" r="7" fill="#A7D1AB" />
        <circle
          cx="82"
          cy="50"
          r="5"
          fill="white"
          style={{ animationDelay: "0.2s" }}
        />
      </g>
      <g>
        <circle cx="50" cy="82" r="7" fill="#A7D1AB" />
        <circle
          cx="50"
          cy="82"
          r="5"
          fill="white"
          style={{ animationDelay: "0.4s" }}
        />
      </g>
      <g>
        <circle cx="18" cy="50" r="7" fill="#A7D1AB" />
        <circle
          cx="18"
          cy="50"
          r="5"
          fill="white"
          style={{ animationDelay: "0.6s" }}
        />
      </g>
    </svg>
  );
};
/