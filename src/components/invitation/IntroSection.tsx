"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/invitation/Gallery";
import "@/styles/intro-section.css";

interface IntroSectionProps {
  onProceed: () => void;
}

const images = [
  {
    src: "/galia/galiabebe.webp",
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
    <div className="intro-section-component intro-section">
      <div className="background-animation">
        <img src="/img/daisy.png" alt="Daisy" className="daisy daisy-1" />
        <img
          src="/img/balloon2.jpg"
          alt="Balloon"
          className="balloon balloon-1"
        />
        <img
          src="/img/balloon3.svg"
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
      <div className="intro-content">
        <header className="intro-header">
          <h1 className="intro-title">¡Celebra conmigo!</h1>
          <div className="badge">1 añito</div>
        </header>
        <p className="intro-description">
          Galia está cumpliendo su primer añito y quiere compartir este día tan
          especial contigo
        </p>
        <Gallery images={images} />
        <Button
          onClick={onProceed}
          className="proceed-button"
        >
          Entrar a la invitacion
        </Button>
      </div>
    </div>
  );
};
