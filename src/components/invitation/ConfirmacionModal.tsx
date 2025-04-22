'use client';

import React, {useState} from 'react';
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
} from '@/components/ui/alert-dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';

interface ConfirmacionModalProps {
  onConfirm: (name: string, quantity: number) => void;
}

const whatsappNumber = '+59892475455';

export const ConfirmacionModal: React.FC<ConfirmacionModalProps> = ({onConfirm}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  const handleConfirm = () => {
    onConfirm(name, quantity);
  };

  const generateWhatsAppMessage = () => {
    const message = `Nos va a encantar asistir al cumple de Galia, vamos a asistir ${quantity} personas.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Confirma asistencia</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirma tu asistencia</AlertDialogTitle>
          <AlertDialogDescription>
            Por favor, ingresa tu nombre y la cantidad de personas que asistirán
            al cumpleaños de Galia.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Cantidad de personas
            </Label>
            <Input
              type="number"
              id="quantity"
              value={quantity.toString()}
              onChange={e => setQuantity(parseInt(e.target.value))}
              className="col-span-3"
              min="1"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConfirm}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Confirmar
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
