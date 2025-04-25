'use server';

import { NextResponse } from 'next/server';

interface Message {
  name: string;
  message: string;
  timestamp: Date;
  // In a real app, you might store an imageUrl here after upload
}

// Simulate in-memory storage (data is lost on server restart)
let mensajes: Message[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message } = body;

    // Basic validation on the server side as well
    if (!name || !message) {
      return NextResponse.json(
        { message: 'Nombre y mensaje son requeridos.' },
        { status: 400 }
      );
    }

     if (message.length > 140) {
       return NextResponse.json(
         { message: 'El mensaje no puede exceder los 140 caracteres.' },
         { status: 400 }
       );
     }


    const newMessage: Message = {
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
      // imageUrl: body.imageUrl || undefined // Optional image URL handling
    };

    mensajes.push(newMessage);

    console.log('Nuevo mensaje guardado:', newMessage);
    console.log('Total mensajes:', mensajes.length);

    return NextResponse.json({ message: 'Mensaje guardado exitosamente' }, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('Error guardando mensaje:', error);
    // Differentiate between JSON parsing errors and other errors
     if (error instanceof SyntaxError) {
       return NextResponse.json({ message: 'Error en el formato de la solicitud.' }, { status: 400 });
     }
    return NextResponse.json(
      { message: 'Error interno del servidor al guardar el mensaje' },
      { status: 500 }
    );
  }
}

// Optional: Add a GET handler to retrieve messages if needed later
export async function GET(req: Request) {
   try {
     // Return a copy to avoid modifying the original array directly if needed elsewhere
     return NextResponse.json({ mensajes: [...mensajes] }, { status: 200 });
   } catch (error) {
     console.error('Error obteniendo mensajes:', error);
     return NextResponse.json(
       { message: 'Error interno del servidor al obtener los mensajes' },
       { status: 500 }
     );
   }
}
