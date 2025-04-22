'use client';

import React, {useState, useEffect} from 'react';
import {AnimatedLoadingScreen} from '@/components/AnimatedLoadingScreen';
import {IntroductionPage} from '@/components/IntroductionPage';
import {InvitationDisplay} from '@/components/InvitationDisplay';
import {InteractiveMap} from '@/components/InteractiveMap';
import {RSVPForm} from '@/components/RSVPForm';
import {Toaster} from '@/components/ui/toaster';
import {useToast} from '@/hooks/use-toast';
import {Button} from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const images = [
  'https://picsum.photos/id/1018/1024/768',
  'https://picsum.photos/id/1015/1024/768',
  'https://picsum.photos/id/1019/1024/768',
  'https://picsum.photos/id/1020/1024/768',
];

const invitationDetails = {
  date: 'October 26, 2024',
  time: '2:00 PM',
  location: {
    name: 'Celebration Gardens',
    address: '123 Main St, Anytown, USA',
    coordinates: {lat: 34.0522, lng: -118.2437},
  },
  rsvpEmail: 'rsvp@example.com',
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [introductionDone, setIntroductionDone] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setShowIntroduction(true);
      }, 3000);
    }
  }, [loading]);

  const handleIntroductionComplete = () => {
    setIntroductionDone(true);
    setShowIntroduction(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Toaster />
      {loading ? (
        <AnimatedLoadingScreen />
      ) : showIntroduction ? (
        <IntroductionPage images={images} onComplete={handleIntroductionComplete} />
      ) : (
        <>
          <InvitationDisplay invitationDetails={invitationDetails} />
          <InteractiveMap location={invitationDetails.location.coordinates} />
          <RSVPForm rsvpEmail={invitationDetails.rsvpEmail} />
        </>
      )}
    </main>
  );
}
