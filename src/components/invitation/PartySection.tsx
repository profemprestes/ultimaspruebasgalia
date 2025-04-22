'use client';

import React from 'react';
import '@/styles/PartySection.css';
import Sobremimodal from '@/components/invitation/Sobremimodal';

const PartySection: React.FC = () => {
  return (
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
          {/* CardParty components will go here */}
          <div>Envíame un Mensaje</div>
          <div>
            <Sobremimodal buttonText="Datos Sobre Mí" buttonClassName="about-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartySection;

