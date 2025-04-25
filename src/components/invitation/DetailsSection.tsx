"use client";

import React from "react";
import "@/styles/DetailsSection.css";
import { ConfirmacionModal } from "@/components/invitation/ConfirmacionModal";
import { CalendarDays, MapPin } from "lucide-react"; // Import Lucide icons

export const DetailsSection: React.FC = () => {
  return (
    <>
      <div className="principal-date-container" id="details-section">
        <div className="flower-decoration">
          <img src="/daisy.svg" className="flower-icon" alt="icono margarita" />
        </div>

        <div className="title-container">
          {/* Updated heading style */}
          <h2 className="text-center text-5xl md:text-6xl font-['Parisienne',_cursive] text-primary">
            Mi Fiesta
          </h2>
        </div>

        <div className="info-grid">
          {/* Card 1: When */}
          <div className="info-card">
            <div className="info-card-inner">
              <p className="info-label">Cuándo</p>
              <span className="info-value"> Sábado 10 de mayo de 2025 - 13:00 hs </span>
              <a
                href="https://calendar.app.google/ursVLnsMBwkJSUVs8"
                target="_blank"
                className="action-button" // Simplified class, styling via CSS
                rel="noopener noreferrer"
              >
                <CalendarDays className="button-icon" /> {/* Lucide Icon */}
                <span className="button-text">Agendar</span>
              </a>
            </div>
          </div>

          {/* Card 2: Where */}
          <div className="info-card">
            <div className="info-card-inner">
              <p className="info-label">Dónde</p>
              <span className="info-value"> Club Ciclista Juanico, Calle San Marcos </span>
              <a
                href="https://maps.app.goo.gl/nB1U1MJTKiEXN33A6"
                target="_blank"
                className="action-button" // Simplified class, styling via CSS
                rel="noopener noreferrer"
              >
                <MapPin className="button-icon" /> {/* Lucide Icon */}
                <span className="button-text">¿Cómo llegar?</span>
              </a>
            </div>
          </div>

          {/* Card 3: Confirm Assistance */}
          <div className="info-card">
            <div className="info-card-inner">
              <p className="info-label">Confirma asistencia</p>
              <span className="info-value"> Me gustaría que confirmes tu asistencia </span>
              <div className="modal-wrapper">
                {/* Pass confirm function directly */}
                <ConfirmacionModal onConfirm={(name, quantity) => {
                   console.log(`Confirmado: Nombre: ${name}, Cantidad: ${quantity}`);
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
