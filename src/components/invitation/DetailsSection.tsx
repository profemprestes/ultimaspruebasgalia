"use client";

import React from "react";
import { CONSTANTS } from "@/lib/constants";

export const DetailsSection: React.FC = () => {
  return (
    <div className="details-section">
      <h2>Event Details</h2>
      <p>Date: {CONSTANTS.eventDate.toLocaleDateString()}</p>
      <p>Time: {CONSTANTS.eventDate.toLocaleTimeString()}</p>
      <p>Location: {CONSTANTS.eventLocation}</p>
      <p>Theme: {CONSTANTS.eventTheme}</p>
    </div>
  );
};
