'use server';

import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Received RSVP submission:', data);

    // Simulate success response
    return NextResponse.json({message: 'RSVP submitted successfully'}, {status: 200});
  } catch (error) {
    console.error('Error processing RSVP submission:', error);
    return NextResponse.json(
      {message: 'Failed to submit RSVP', error: (error as any).message},
      {status: 500}
    );
  }
}
