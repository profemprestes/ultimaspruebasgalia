'use client';

import React from 'react';

interface Location {
  lat: number;
  lng: number;
}

interface InteractiveMapProps {
  location: Location;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({location}) => {
  return (
    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md mt-6">
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7Clabel:G%7C${location.lat},${location.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        alt="Party Location Map"
        className="w-full h-auto"
      />
    </div>
  );
};
