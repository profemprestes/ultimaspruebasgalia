'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@/styles/hero-section.css'; // Ensure this CSS file exists and is styled
import { Card, CardContent } from '@/components/ui/card'; // Ensure Card and CardContent are imported
import { MapPin, Calendar } from 'lucide-react'; // Import icons
import { CountdownTimer } from "@/components/invitation/CountdownTimer";
import { CONSTANTS } from "@/lib/constants";

export const HeroSection: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [eventInProgress, setEventInProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.pageYOffset;
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check if the event is in progress
    const now = new Date();
    if (now >= CONSTANTS.eventDate) {
      setEventInProgress(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToDetails = () => {
    const detailsSection = document.getElementById('details-section');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" data-target="countdown-section">
      <div className="hero__background" ref={backgroundRef}>
        {/* Parallax background image */}
        <img
          alt="Imagen de fondo con efecto parallax"
          src="/herogalia.gif"
          id="parallax-hero"
        />
      </div>
      <Card className="hero__card"> {/* Use ShadCN Card */}
        <CardContent className="flex flex-col items-center p-6"> {/* Use CardContent and Tailwind for layout */}
          {/* Animated image of Galia */}
          <img
            alt="Imagen animada de Galia"
            src="/sobremi.gif"
            className="hero__animated-image mb-4" // Added margin-bottom
            loading="lazy"
          />
          <div className="hero__info text-center"> {/* Centered text */}
            {/* Greeting text */}
            <p className="hero__greeting text-lg text-muted-foreground mb-2">¡Acompáñame a celebrar!</p>
            {/* Main celebration title */}
            <h1 className="hero__celebration text-4xl font-bold mb-1">
              Mi <span className="hero__age text-primary">Primer Añito</span>
            </h1>
            {/* Name */}
            <p className="hero__name text-2xl text-foreground mb-4">Soy Galia</p>
            {/* Event location details */}
            <p className="hero__event-details flex items-center justify-center gap-2 text-muted-foreground mb-1">
              <MapPin className="hero__icon hero__icon--location w-5 h-5 text-primary" /> {/* Lucide icon */}
              Club Ciclista Juanico
            </p>
            {/* Event date and time details */}
            <p className="hero__event-details flex items-center justify-center gap-2 text-muted-foreground mb-4">
               <Calendar className="hero__icon hero__icon--time w-5 h-5 text-primary" /> {/* Lucide icon */}
               10 de Mayo de 2025 | 13:00
            </p>

            {/* Conditionally render Countdown Timer or event in progress message */}
             {!eventInProgress ? (
               <CountdownTimer eventDate={CONSTANTS.eventDate} />
             ) : (
               <p className="hero__event-in-progress text-xl font-semibold text-green-600 my-4">¡El evento está en curso!</p>
             )}

            {/* Invitation text */}
            <div className="hero__invitation mt-4">
              <p className="hero__invitation-text text-foreground italic">
                ¡Tu presencia hará este día aún más especial!
              </p>
            </div>
          </div>
           {/* Scroll indicator */}
            <div className="hero__scroll-indicator flex flex-col items-center gap-1 cursor-pointer mt-6" onClick={scrollToDetails}>
                 <span className="hero__scroll-text text-sm text-primary">Desliza para ver más</span>
                 <img src="/arrow_down.gif" alt="Desliza hacia abajo" className="hero__scroll-arrow w-8 h-auto" />
            </div>
        </CardContent>
      </Card>
    </section>
  );
};
