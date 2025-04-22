"use client";

import React, { useState, useEffect } from "react";
import { useCountdown } from "@/hooks/use-countdown";

interface CountdownTimerProps {
  eventDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  eventDate,
}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="countdown-timer">
      <div>
        <span>{days}</span>
        <p>Days</p>
      </div>
      <div>
        <span>{hours}</span>
        <p>Hours</p>
      </div>
      <div>
        <span>{minutes}</span>
        <p>Minutes</p>
      </div>
      <div>
        <span>{seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};
