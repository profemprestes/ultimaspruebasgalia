"use client";

import { useState, useEffect } from 'react';

// Create a hook that detects hydration state
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  return isHydrated;
}
