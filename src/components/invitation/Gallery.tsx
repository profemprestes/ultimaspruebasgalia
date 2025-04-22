"use client";

import React from "react";
import { useGallery } from "@/hooks/use-gallery";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/gallery.css";

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://picsum.photos/id/10/750/500",
      caption: "Galia at 1 month",
    },
    {
      src: "https://picsum.photos/id/20/750/500",
      caption: "Galia at 3 months",
    },
    {
      src: "https://picsum.photos/id/30/750/500",
      caption: "Galia at 6 months",
    },
  ];

  const {
    currentImageIndex,
    goToPreviousImage,
    goToNextImage,
    goToImage,
  } = useGallery(images.length);

  return (
    <div className="gallery">
      <div className="image-container">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].caption}
          className="gallery-image"
        />
        <div className="image-caption">
          {images[currentImageIndex].caption}
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={goToPreviousImage}>
          <ChevronLeft />
        </button>
        <button className="nav-button" onClick={goToNextImage}>
          <ChevronRight />
        </button>
      </div>
      <div className="navigation-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
/