'use client';

import React from 'react';

export const AnimatedLoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <svg
        className="animate-spin h-16 w-16 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3a9 9 0 100 18 9 9 0 000-18z"
        />
        <path
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v5m0 13V8m5-5h-5M12 8h5m-9 8H7m9 0h-5m5 0v5M7 16v5"
        />
      </svg>
      <p className="mt-4 text-lg font-semibold text-foreground">Loading...</p>
    </div>
  );
};
