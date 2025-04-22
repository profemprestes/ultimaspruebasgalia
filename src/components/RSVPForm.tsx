'use client';

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {useToast} from '@/hooks/use-toast';

interface RSVPFormProps {
  rsvpEmail: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({rsvpEmail}) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');
  const {toast} = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, attending, message, rsvpEmail}),
      });

      if (response.ok) {
        toast({
          title: 'RSVP Submitted',
          description: 'Thank you for your RSVP!',
        });
        setName('');
        setAttending('yes');
        setMessage('');
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit RSVP. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-6 w-full max-w-md mt-6 text-foreground">
      <h3 className="text-xl font-semibold mb-4">RSVP to Galia's Birthday</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Attending:</Label>
          <div className="flex gap-2">
            <label className="inline-flex items-center">
              <Input
                type="radio"
                value="yes"
                checked={attending === 'yes'}
                onChange={() => setAttending('yes')}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <Input
                type="radio"
                value="no"
                checked={attending === 'no'}
                onChange={() => setAttending('no')}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div>
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message for Galia!"
          />
        </div>
        <Button type="submit">Submit RSVP</Button>
      </form>
    </div>
  );
};
