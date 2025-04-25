"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/invitation/Gallery";
import "@/styles/intro-section.css"; // Ensure this CSS file exists and is correctly styled

interface IntroSectionProps {
  onProceed: () => void;
}

const images = [
  {
    src: "/GaliaFoto.png",
    caption: "Mi primer añito",
  },
  {
    src: "/galia/galiahamaca.webp",
    caption: "Momentos especiales",
  },
  {
    src: "/galia/galiamaurogime.webp",
    caption: "Sonrisas de Galia",
  },
  {
    src: "/galia/galiamaurogimeauto.webp",
    caption: "Celebrando juntos",
  },
];

export const IntroSection: React.FC<IntroSectionProps> = ({ onProceed }) => {
  return (
    <div className="intro-section">
      {/* Background Animation remains the same */}
      <div className="background-animation">
        <img src="/img/daisy.png" alt="Daisy" className="daisy daisy-1" />
        <img
          src="/img/balloon2.jpg"
          alt="Balloon"
          className="balloon balloon-1"
        />
        <img
          src="/img/balloon2.jpg"
          alt="Balloon"
          className="balloon balloon-2"
        />
        <img
          src="/img/balloon1.svg"
          alt="Balloon"
          className="balloon balloon-3"
        />
        <img src="/img/daisy.png" alt="Daisy" className="daisy daisy-2" />
      </div>

      {/* Main Content */}
      <div className="intro-content">
        <header className="intro-header">
          {/* Apply new styles to the title */}
          <h1 className="intro-title" style={{ fontFamily: 'Parisienne, cursive', color: 'hsl(var(--primary))' }}>
            ¡Celebra conmigo!
          </h1>
          {/* Ensure badge styles are appropriate */}
          <div className="badge">1 añito</div>
        </header>
        {/* Adjust description styles */}
        <p className="intro-description">
          Galia está cumpliendo su primer añito y quiere compartir este día tan
          especial contigo
        </p>

        {/* Gallery component remains the same */}
        <Gallery images={images} />

        {/* Button styles adjusted */}
        <Button
          onClick={onProceed}
          style={{
            backgroundColor: 'hsl(var(--secondary))', // Use secondary color
            color: 'hsl(var(--secondary-foreground))', // Use secondary foreground color
            padding: '15px 30px',
            borderRadius: 'var(--radius-lg)', // Use theme radius
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease', // Added transform and shadow transition
            boxShadow: 'var(--shadow-md)', // Use theme shadow
            border: 'none',
            fontWeight: 600, // Make text slightly bolder
            marginTop: '2rem', // Add some space above the button
          }}
          className="proceed-button" // Keep class for potential CSS overrides or hover effects
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; // Use accent color on hover
            e.currentTarget.style.color = 'hsl(var(--accent-foreground))';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--secondary))';
            e.currentTarget.style.color = 'hsl(var(--secondary-foreground))';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
        >
          Entrar a la invitacion
        </Button>
      </div>
    </div>
  );
};
