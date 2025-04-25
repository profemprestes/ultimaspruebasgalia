'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
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
        // Adjust the parallax effect speed (e.g., 0.3)
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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="hero" data-target="countdown-section">
      {/* Parallax background image */}
      <div className="hero__background" ref={backgroundRef}>
        <img
          alt="Imagen de fondo con efecto parallax"
          src="/fondoback.gif" // Ensure this image exists in public folder
          id="parallax-hero"
          loading="lazy" // Lazy load background image
        />
      </div>
       {/* Apply animation variant to the Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="w-full max-w-xl" // Constrain card width
      >
          <Card className="hero__card"> {/* Use ShadCN Card */}
            <CardContent className="flex flex-col items-center p-6 md:p-8"> {/* Use CardContent and responsive padding */}
              {/* Animated image of Galia */}
              <motion.img
                variants={itemVariants}
                alt="Imagen animada de Galia"
                src="/GaliaHero1.gif" // Ensure this image exists
                className="hero__animated-image mb-6 w-24 h-24 md:w-32 md:h-32" // Adjust size and margin
                loading="lazy"
              />
              <div className="hero__info text-center"> {/* Centered text */}
                {/* Greeting text */}
                <motion.p variants={itemVariants} className="hero__greeting text-lg md:text-xl text-muted-foreground mb-2">¡Acompáñame a celebrar!</motion.p>
                {/* Main celebration title */}
                <motion.h1 variants={itemVariants} className="hero__celebration text-4xl md:text-5xl font-bold mb-2">
                  Mi <span className="hero__age text-secondary">Primer Añito</span>
                </motion.h1>
                {/* Name */}
                <motion.p variants={itemVariants} className="hero__name text-2xl md:text-3xl text-foreground mb-6">Soy Galia</motion.p>
                {/* Event location details */}
                 <motion.p variants={itemVariants} className="hero__event-details flex items-center justify-center gap-2 text-muted-foreground mb-2 text-sm md:text-base">
                  <MapPin className="hero__icon hero__icon--location w-4 h-4 md:w-5 md:h-5 text-primary" /> {/* Lucide icon */}
                  Club Ciclista Juanico
                </motion.p>
                {/* Event date and time details */}
                <motion.p variants={itemVariants} className="hero__event-details flex items-center justify-center gap-2 text-muted-foreground mb-6 text-sm md:text-base">
                  <Calendar className="hero__icon hero__icon--time w-4 h-4 md:w-5 md:h-5 text-primary" /> {/* Lucide icon */}
                  10 de Mayo de 2025 | 13:00
                </motion.p>

                {/* Conditionally render Countdown Timer or event in progress message */}
                <motion.div variants={itemVariants} className="mb-6">
                  {!eventInProgress ? (
                    <CountdownTimer eventDate={CONSTANTS.eventDate} />
                  ) : (
                    <p className="hero__event-in-progress text-xl font-semibold text-green-600 my-4">¡El evento está en curso!</p>
                  )}
                </motion.div>

                {/* Invitation text */}
                <motion.div variants={itemVariants} className="hero__invitation mt-4">
                  <p className="hero__invitation-text text-foreground italic text-base md:text-lg">
                    ¡Tu presencia hará este día aún más especial!
                  </p>
                </motion.div>
              </div>
               {/* Scroll indicator */}
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }} // Delayed animation for indicator
                  className="hero__scroll-indicator flex flex-col items-center gap-2 cursor-pointer mt-8" onClick={scrollToDetails}>
                     <span className="hero__scroll-text text-sm md:text-base text-primary font-medium">Desliza para ver más</span>
                     <motion.img
                        src="/arrow_down.gif"
                        alt="Desliza hacia abajo"
                        className="hero__scroll-arrow w-8 h-auto md:w-10" // Responsive arrow size
                        animate={{ y: [0, 8, 0] }} // Bounce animation
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                     />
                </motion.div>
            </CardContent>
          </Card>
        </motion.div>
    </section>
  );
};
