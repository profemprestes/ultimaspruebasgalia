'use client';

import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

interface IntroductionPageProps {
  images: string[];
  onComplete: () => void;
}

export const IntroductionPage: React.FC<IntroductionPageProps> = ({images, onComplete}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFadeIn(true);
    timerRef.current = setTimeout(() => {
      setFadeIn(false);
    }, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentImageIndex]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleComplete = () => {
    onComplete();
  };

  const handleImageLoaded = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = '1';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-3xl font-semibold text-foreground mb-8">Welcome to Galia's First Adventure!</h1>
      <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-xl transition-opacity duration-500">
        <img
          ref={imageRef}
          src={images[currentImageIndex]}
          alt={`Introduction ${currentImageIndex + 1}`}
          className={cn(
            'w-full h-auto transition-opacity duration-500 ease-in-out',
            fadeIn ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={handleImageLoaded}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Image {currentImageIndex + 1} of {images.length}
          </p>
          <Button variant="secondary" size="sm" onClick={handleNextImage}>
            Next
          </Button>
        </div>
      </div>
      <Button className="mt-8" onClick={handleComplete}>
        View Invitation
      </Button>
    </div>
  );
};
