"use client";

import React from "react";

interface CountdownTimerProps {
  eventDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  eventDate,
}) => {
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
    } else {
       days = 0;
       hours = 0;
       minutes = 0;
       seconds = 0;
    }

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
