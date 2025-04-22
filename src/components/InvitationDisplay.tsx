'use client';

import React from 'react';

interface InvitationDetails {
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
  };
  rsvpEmail: string;
}

interface InvitationDisplayProps {
  invitationDetails: InvitationDetails;
}

export const InvitationDisplay: React.FC<InvitationDisplayProps> = ({invitationDetails}) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 w-full max-w-md text-foreground">
      <h2 className="text-2xl font-semibold mb-4">You're Invited to Galia's First Birthday!</h2>
      <p className="mb-2">
        <span className="font-semibold">Date:</span> {invitationDetails.date}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Time:</span> {invitationDetails.time}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Location:</span> {invitationDetails.location.name}
        <br />
        {invitationDetails.location.address}
      </p>
      <p className="mb-2">
        <span className="font-semibold">RSVP:</span> {invitationDetails.rsvpEmail}
      </p>
      <p className="text-sm text-muted-foreground mt-4">
        We can't wait to celebrate with you!
      </p>
    </div>
  );
};
