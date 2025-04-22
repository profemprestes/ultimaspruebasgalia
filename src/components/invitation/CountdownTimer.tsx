"use client";

import React, { useState, useEffect } from "react";
import "@/styles/CountdownTimer.css"; // Import the CSS file

interface CountdownTimerProps {
  eventDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  eventDate,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(eventDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  function getTimeRemaining(eventDate: Date) {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown-timer">
      <div>
        <span className="countdown-number">{timeRemaining.days}</span>
        <p>Dias</p>
      </div>
      <div>
        <span className="countdown-number">{timeRemaining.hours}</span>
        <p>Horas</p>
      </div>
      <div>
        <span className="countdown-number">{timeRemaining.minutes}</span>
        <p>Minutos</p>
      </div>
      <div>
        <span className="countdown-number">{timeRemaining.seconds}</span>
        <p>Segundos</p>
      </div>
    </div>
  );
};

