"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react"; // Correct icon as per existing code
import MensajeModal from "./MensajeModal"; // Import the modal component
import { Button } from "@/components/ui/button"; // Import Shadcn Button
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip components

export default function BotonFlotanteMensajes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default" // Use Shadcn button styling
              size="icon"
              className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground animate-bounce" // Added bounce animation
              onClick={handleOpenModal}
              aria-label="Dejar un mensaje"
            >
              <MessageSquare size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={5}>
            <p>Dejar un Mensaje</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <MensajeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
