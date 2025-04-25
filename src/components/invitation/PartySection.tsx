'use client';

import React from 'react';
import '@/styles/PartySection.css';

const PartySection: React.FC = () => {
  return (
    <div className="party-section">
      <div className="party-decorations">
        <div className="decoration balloon-left"></div>
        <div className="decoration balloon-right"></div>
        <div className="decoration confetti-1"></div>
        <div className="decoration confetti-2"></div>
      </div>
      <div className="party-container">
        <div className="party-header">
          <div className="party-title-wrapper">
            <h2 className="text-center desktop:text-6xl font-parisienne phone:text-5xl text-5xl text-color01">
              Mi Fiesta
            </h2>
          </div>
          <p className="party-subtitle">
            ¡Estoy muy emocionada por compartir mi primer añito contigo!
          </p>
        </div>
        <div className="party-content">
          <div className="party-cards-container">
            <div className="party-card">
              <div className="bounce party-card-icon">
                <img src="/enviarmensaje.gif" alt="Icono de Envíame un Mensaje" />
              </div>
              <h3 className="fadeIn party-card-title">Envíame un Mensaje</h3>
              <div className="party-card-description slideUp">
                ¿Quieres dejarme un mensaje especial para el día de mi fiesta?
                ¡Me encantaría leerlo!
              </div>
              <div className="button-wrapper fadeInUp">
                <button className="message-button message-button custom-modal-button">
                  Enviar mensaje
                </button>
              </div>
            </div>

            <div className="party-card">
              <div className="bounce party-card-icon">
                <img src="/sobremi.gif" alt="Icono de Datos Sobre Mí" />
              </div>
              <h3 className="fadeIn party-card-title">Datos Sobre Mí</h3>
              <div className="party-card-description slideUp">
                ¿Quieres conocer un poco más sobre mí? ¡Descubre mis gustos y lo
                que me hace feliz!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartySection;
