'use server';
/**
 * @fileOverview AI-powered tool to generate a personalized thank you message template based on the guest's RSVP.
 *
 * - generateThankYouMessage - A function that handles the thank you message generation process.
 * - GenerateThankYouMessageInput - The input type for the generateThankYouMessage function.
 * - GenerateThankYouMessageOutput - The return type for the generateThankYouMessage function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateThankYouMessageInputSchema = z.object({
  guestName: z.string().describe('The name of the guest.'),
  galiaName: z.string().describe('The name of Galia, who is having her first birthday.'),
  rsvpResponse: z.string().describe('The guest\'s RSVP response (e.g., attending, not attending).'),
  additionalNotes: z.string().optional().describe('Any additional notes from the guest.'),
});

export type GenerateThankYouMessageInput = z.infer<
  typeof GenerateThankYouMessageInputSchema
>;

const GenerateThankYouMessageOutputSchema = z.object({
  thankYouMessage: z.string().describe('A personalized thank you message template.'),
});

export type GenerateThankYouMessageOutput = z.infer<
  typeof GenerateThankYouMessageOutputSchema
>;

export async function generateThankYouMessage(
  input: GenerateThankYouMessageInput
): Promise<GenerateThankYouMessageOutput> {
  return generateThankYouMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThankYouMessagePrompt',
  input: {
    schema: z.object({
      guestName: z.string().describe('The name of the guest.'),
      galiaName: z.string().describe('The name of Galia, who is having her first birthday.'),
      rsvpResponse: z.string().describe('The guest\'s RSVP response (e.g., attending, not attending).'),
      additionalNotes: z.string().optional().describe('Any additional notes from the guest.'),
    }),
  },
  output: {
    schema: z.object({
      thankYouMessage: z.string().describe('A personalized thank you message template.'),
    }),
  },
  prompt: `You are a helpful assistant that crafts thank you messages for guests of Galia\'s first birthday party.

  Based on the guest\'s RSVP response and any additional notes, generate a personalized thank you message template.

  Guest Name: {{{guestName}}}
  Galia\'s Name: {{{galiaName}}}
  RSVP Response: {{{rsvpResponse}}}
  Additional Notes: {{{additionalNotes}}}

  Thank You Message Template:`,
});

const generateThankYouMessageFlow = ai.defineFlow<
  typeof GenerateThankYouMessageInputSchema,
  typeof GenerateThankYouMessageOutputSchema
>(
  {
    name: 'generateThankYouMessageFlow',
    inputSchema: GenerateThankYouMessageInputSchema,
    outputSchema: GenerateThankYouMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
