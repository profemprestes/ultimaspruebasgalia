'use client';

import React, {useEffect, useRef, useState} from 'react';
import '@/styles/hero-section.css';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {MapPinIcon, CalendarIcon} from 'lucide-react';
import {CountdownTimer} from "@/components/invitation/CountdownTimer";
import {CONSTANTS} from "@/lib/constants";

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

  return (
    <section className="hero">
      <div className="hero__background" ref={backgroundRef}>
        <img src="/herogalia.gif" alt="Celebration background" />
      </div>
      <Card className="hero__card">
        <CardContent>
          <img
            src="/sobremi.gif"
            alt="Galia"
            className="hero__animated-image"
          />
          <h1 className="hero__celebration">
            Mi <span className="hero__celebration-primer">Primer</span> Añito
          </h1>
          <h2 className="hero__name">Soy Galia</h2>
          <div className="hero__event-details">
            <p>
              <MapPinIcon className="hero__icon" />
              Club Ciclista Juanico
            </p>
            <p>
              <CalendarIcon className="hero__icon" />
              10 de Mayo de 2024 | 13:00 - 18:00
            </p>
          </div>

          {/* Conditionally render either the countdown timer or the event in progress message */}
          {eventInProgress ? (
            <p className="hero__event-in-progress">¡El evento está en curso!</p>
          ) : (
            <CountdownTimer eventDate={CONSTANTS.eventDate} />
          )}

          <p className="hero__invitation-text">
            ¡Tu presencia hará este día aún más especial!
          </p>
          {/*<Button>Confirmar Asistencia</Button>*/}
        </CardContent>
      </Card>
      <div className="hero__scroll-indicator">
        <span>Desliza para ver más</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero__scroll-arrow"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

