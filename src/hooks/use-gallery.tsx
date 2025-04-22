"use client";

import { useState, useCallback } from "react";

export const useGallery = (imageCount: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageCount - 1 : prevIndex - 1
    );
  }, [imageCount]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageCount - 1 ? 0 : prevIndex + 1
    );
  }, [imageCount]);

  const goToImage = useCallback(
    (index: number) => {
      setCurrentImageIndex(index);
    },
    []
  );

  return {
    currentImageIndex,
    goToPreviousImage,
    goToNextImage,
    goToImage,
  };
};
