"use client";

import React from "react";
import "@/styles/DetailsSection.css";
import {AsistenciaModal} from "@/components/ui/asistencia-modal";

export const DetailsSection: React.FC = () => {
  return (
    <div className="principal-date-container">
      <div className="flower-decoration">
        <img src="/daisy.svg" className="flower-icon" alt="icono margarita" />
      </div>

      <div className="title-container">
        <h3 className="birthday-title">¡Galia cumple 1 añito!</h3>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-card-inner">
            <p className="info-label">Cuándo</p>
            <span className="info-value"> Sábado 10 de mayo de 2025 - 13:00 hs </span>
            <a
              href="https://calendar.app.google/ursVLnsMBwkJSUVs8"
              target="_blank"
              className="action-button calendar-button"
              rel="noopener noreferrer"
            >
              <span className="button-icon">📅</span>
              <span className="button-text">Agendar</span>
            </a>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-inner">
            <p className="info-label">Dónde</p>
            <span className="info-value"> Club Ciclista Juanico, Calle San Marcos </span>
            <a
              href="https://maps.app.goo.gl/nB1U1MJTKiEXN33A6"
              target="_blank"
              className="action-button location-button"
              rel="noopener noreferrer"
            >
              <span className="button-icon">📍</span>
              <span className="button-text">¿Cómo llegar?</span>
            </a>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-inner">
            <p className="info-label">Confirma asistencia</p>
            <span className="info-value"> Me gustaría que confirmes tu asistencia </span>
            <div className="modal-wrapper">
              <AsistenciaModal type="cumpleaños" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

