"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/invitation/LoadingScreen";
import { IntroSection } from "@/components/invitation/IntroSection";
import { HeroSection } from "@/components/invitation/HeroSection";
import { CountdownTimer } from "@/components/invitation/CountdownTimer";
import { DetailsSection } from "@/components/invitation/DetailsSection";
import { MapLocation } from "@/components/invitation/MapLocation";
import { RsvpForm } from "@/components/invitation/RsvpForm";
import { ThankYouGenerator } from "@/components/invitation/ThankYouGenerator";
import { CONSTANTS } from "@/lib/constants";
import { useHydration } from "@/hooks/use-hydration";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const isHydrated = useHydration();

  useEffect(() => {
    // Simulate loading time
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : showIntro ? (
        <IntroSection onProceed={handleProceedToInvitation} />
      ) : showInvitation ? (
        <>
          {isHydrated ? <HeroSection /> : null}
          {isHydrated ? <CountdownTimer eventDate={CONSTANTS.eventDate} /> : null}
          {isHydrated ? <DetailsSection /> : null}
          {isHydrated ? <MapLocation /> : null}
          {isHydrated ? <RsvpForm /> : null}
          {isHydrated ? <ThankYouGenerator /> : null}
        </>
      ) : null}
    </div>
  );
}

