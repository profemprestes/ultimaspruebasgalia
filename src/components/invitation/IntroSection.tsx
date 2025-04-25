"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/invitation/Gallery";
import { motion } from "framer-motion";
import "@/styles/intro-section.css";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Añadir un pequeño retraso para la animación de entrada
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-section">
      {/* Animaciones de fondo mejoradas */}
      <div className="background-animation">
        <img src="/img/daisy.png" alt="Margarita" className="daisy daisy-1 floating" />
        <img
          src="/img/balloon2.jpg"
          alt="Globo"
          className="balloon balloon-1 floating-slow"
        />
        <img
          src="/img/balloon2.jpg"
          alt="Globo"
          className="balloon balloon-2 floating-medium"
        />
        <img
          src="/img/balloon1.svg"
          alt="Globo"
          className="balloon balloon-3 floating-fast"
        />
        <img src="/img/daisy.png" alt="Margarita" className="daisy daisy-2 floating-reverse" />
        
        {/* Elementos decorativos adicionales */}
        <div className="confetti confetti-1"></div>
        <div className="confetti confetti-2"></div>
        <div className="confetti confetti-3"></div>
        <div className="confetti confetti-4"></div>
      </div>

      {/* Contenido principal con animaciones */}
      <motion.div 
        className="intro-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.header 
          className="intro-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="intro-title">
            ¡Celebra conmigo!
          </h1>
          <motion.div 
            className="badge"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
          >
            1 añito
          </motion.div>
        </motion.header>
        
        <motion.p 
          className="intro-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Galia está cumpliendo su primer añito y quiere compartir este día tan
          especial contigo
        </motion.p>

        {/* Galería con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Gallery images={images} />
        </motion.div>

        {/* Botón con animación de entrada y efectos de hover mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="button-container"
        >
          <Button
            onClick={onProceed}
            className="proceed-button"
          >
            Entrar a la invitación
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
