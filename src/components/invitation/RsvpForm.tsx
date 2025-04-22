"use client";

import React from "react";

export const RsvpForm: React.FC = () => {
  return (
    <div className="rsvp-form">
      <h2>RSVP</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="attending">Attending:</label>
        <select id="attending" name="attending">
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="maybe">Maybe</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
