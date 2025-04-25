"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import MensajeModal from "./MensajeModal"; // Import the modal component

export default function BotonFlotanteMensajes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 cursor-pointer group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleOpenModal}
      >
        <div className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <MessageSquare size={24} />
        </div>
        <span
          className={`bg-white text-black text-sm px-3 py-1 rounded-lg shadow transition-all duration-300 ${
            showTooltip ? "opacity-100 ml-2" : "opacity-0 ml-0"
          }`}
        >
          Dejar un Mensaje
        </span>
      </div>

      <MensajeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
