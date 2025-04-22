"use client";

import React from "react";
import { useCountdown } from "@/hooks/use-countdown";

interface CountdownTimerProps {
  eventDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  eventDate,
}) => {
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

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
