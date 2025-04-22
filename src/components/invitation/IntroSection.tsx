"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/invitation/Gallery";
import "@/styles/intro-section.css";

interface IntroSectionProps {
  onProceed: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onProceed }) => {
  return (
    <div className="intro-section">
      <div className="intro-content">
        <header className="intro-header">
          <h1>¡Celebra conmigo!</h1>
          <div className="badge">1 añito</div>
        </header>
        <p className="intro-description">
          Galia está cumpliendo su primer añito y quiere compartir este día tan
          especial contigo
        </p>
        <Gallery />
        <Button onClick={onProceed} className="proceed-button">
          Entrar a la invitacion
        </Button>
      </div>
    </div>
  );
};
