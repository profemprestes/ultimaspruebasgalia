"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { IntroSection } from "@/components/invitation/IntroSection";
import { HeroSection } from "@/components/invitation/HeroSection";
import { DetailsSection } from "@/components/invitation/DetailsSection";
import BotonFlotanteRegalos from "@/components/invitation/BotonFlotanteRegalos";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [showModal, setShowModal] = useState(false); // Nuevo estado

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowIntro(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProceedToInvitation = () => {
    setShowIntro(false);
    setShowInvitation(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showIntro) {
    return <IntroSection onProceed={handleProceedToInvitation} />;
  }

  if (showInvitation) {
    return (
      <div className="relative flex flex-col items-center min-h-screen">
        <main className="w-full">
          <HeroSection />
          <DetailsSection />
        </main>
        <BotonFlotanteRegalos />
        <Toaster />

        {/* Botón flotante para abrir el modal */}
        <button
          onClick={toggleModal}
          className="fixed bottom-5 right-5 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
        >
          Dejá tu mensaje
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-lg font-bold mb-4">Enviá tu mensaje</h2>
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                className="flex flex-col space-y-3"
              >
                <input type="hidden" name="form-name" value="contacto" />
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  className="border p-2 rounded"
                  required
                />
                <textarea
                  name="mensaje"
                  placeholder="Escribí tu mensaje..."
                  className="border p-2 rounded"
                  required
                />
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
