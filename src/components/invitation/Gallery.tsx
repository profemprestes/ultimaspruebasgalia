"use client";

import React, { useState, useEffect } from "react";
import { useGallery } from "@/hooks/use-gallery";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/intro-section.css";

interface GalleryImage {
  src: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const {
    currentImageIndex,
    goToPreviousImage,
    goToNextImage,
    goToImage,
  } = useGallery(images.length);

  const [direction, setDirection] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Manejar la dirección de la transición
  const handlePrevious = () => {
    setDirection(-1);
    goToPreviousImage();
  };

  const handleNext = () => {
    setDirection(1);
    goToNextImage();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    goToImage(index);
  };

  // Simular carga de imagen
  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = images[currentImageIndex].src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [currentImageIndex, images]);

  // Variantes para las animaciones
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="gallery-component">
      <div className="image-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              className="image-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loader-spinner" />
            </motion.div>
          ) : (
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="image-wrapper"
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].caption}
                className="gallery-image"
                loading="lazy"
                width={800}
                height={600}
              />
              <motion.div 
                className="image-caption"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {images[currentImageIndex].caption}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="navigation-buttons">
        <motion.button 
          className="nav-button"
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft />
        </motion.button>
        <motion.button 
          className="nav-button"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight />
        </motion.button>
      </div>

      <div className="navigation-dots">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          />
        ))}
      </div>
    </div>
  );
};
