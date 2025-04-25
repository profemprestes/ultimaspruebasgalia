"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { IntroSection } from "@/components/invitation/IntroSection";
import { HeroSection } from "@/components/invitation/HeroSection";
import { DetailsSection } from "@/components/invitation/DetailsSection";
import { MapLocation } from "@/components/invitation/MapLocation";
import { RsvpForm } from "@/components/invitation/RsvpForm";
import { ThankYouGenerator } from "@/components/invitation/ThankYouGenerator";
import { CONSTANTS } from "@/lib/constants";
// Removed PartySection import

// Removed ClientOnly import as the component itself manages client-side state

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Removed ClientOnly wrapper */}
      {isLoading ? (
        <LoadingScreen />
      ) : showIntro ? (
        <IntroSection onProceed={handleProceedToInvitation} />
      ) : showInvitation ? (
        <>
          <HeroSection />
          <DetailsSection />
          {/* Removed PartySection component */}
          {/* Consider adding MapLocation, RsvpForm, ThankYouGenerator here if needed */}
        </>
      ) : null}
    </div>
  );
}
