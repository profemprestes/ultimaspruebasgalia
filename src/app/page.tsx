"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { IntroSection } from "@/components/invitation/IntroSection";
import { HeroSection } from "@/components/invitation/HeroSection";
import { DetailsSection } from "@/components/invitation/DetailsSection";
// Removed MapLocation, RsvpForm, ThankYouGenerator as they are not currently used
import { CONSTANTS } from "@/lib/constants";
// import PartySection from "@/components/invitation/PartySection"; // Already removed
import BotonFlotanteRegalos from "@/components/invitation/BotonFlotanteRegalos";
import BotonFlotanteMensajes from "@/components/invitation/BotonFlotanteMensajes";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowIntro(true);
    }, 2000); // Adjust loading time as needed
    return () => clearTimeout(timer);
  }, []);

  const handleProceedToInvitation = () => {
    setShowIntro(false);
    setShowInvitation(true);
  };

  // Render the appropriate component based on state
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showIntro) {
    return <IntroSection onProceed={handleProceedToInvitation} />;
  }

  if (showInvitation) {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <main className="w-full">
          <HeroSection />
          <DetailsSection />
          {/* PartySection is removed */}
        </main>
        {/* Floating buttons and Toaster are part of the main invitation view */}
        <BotonFlotanteRegalos />
        <BotonFlotanteMensajes />
        <Toaster />
      </div>
    );
  }

  // Fallback or default state if none of the above conditions are met
  return null;
}
