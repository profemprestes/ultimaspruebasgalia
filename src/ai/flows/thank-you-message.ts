'use server';
/**
 * @fileOverview Generates personalized thank you messages based on RSVP responses.
 *
 * - generateThankYouMessage - A function that generates a thank you message.
 * - ThankYouMessageInput - The input type for the generateThankYouMessage function.
 * - ThankYouMessageOutput - The return type for the generateThankYouMessage function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ThankYouMessageInputSchema = z.object({
  guestName: z.string().describe('The name of the guest.'),
  rsvpStatus: z
    .enum(['attending', 'notAttending', 'maybe'])
    .describe('The RSVP status of the guest.'),
  giftGiven: z.string().optional().describe('The gift given by the guest, if any.'),
});
export type ThankYouMessageInput = z.infer<typeof ThankYouMessageInputSchema>;

const ThankYouMessageOutputSchema = z.object({
  message: z.string().describe('The personalized thank you message.'),
});
export type ThankYouMessageOutput = z.infer<typeof ThankYouMessageOutputSchema>;

export async function generateThankYouMessage(
  input: ThankYouMessageInput
): Promise<ThankYouMessageOutput> {
  return generateThankYouMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'thankYouMessagePrompt',
  input: {
    schema: z.object({
      guestName: z.string().describe('The name of the guest.'),
      rsvpStatus: z
        .enum(['attending', 'notAttending', 'maybe'])
        .describe('The RSVP status of the guest.'),
      giftGiven: z.string().optional().describe('The gift given by the guest, if any.'),
    }),
  },
  output: {
    schema: z.object({
      message: z.string().describe('The personalized thank you message.'),
    }),
  },
  prompt: `You are a thank you message generator. Generate a personalized thank you message based on the RSVP status and gift given by the guest.\n\nGuest Name: {{{guestName}}}\nRSVP Status: {{{rsvpStatus}}}\nGift Given: {{{giftGiven}}}\n\nMessage: `,
});

const generateThankYouMessageFlow = ai.defineFlow<
  typeof ThankYouMessageInputSchema,
  typeof ThankYouMessageOutputSchema
>(
  {
    name: 'generateThankYouMessageFlow',
    inputSchema: ThankYouMessageInputSchema,
    outputSchema: ThankYouMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
