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
import {Button} from '@/components/ui/button';

interface SobremimodalProps {
  buttonText: string;
  buttonClassName: string;
}

const Sobremimodal: React.FC<SobremimodalProps> = ({buttonText, buttonClassName}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className={buttonClassName}>{buttonText}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Datos Sobre Mí</AlertDialogTitle>
            <AlertDialogDescription>
              Aquí encontrarás algunos datos sobre mí, mis gustos y comidas
              favoritas.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="modal-body">
            <div className="modal-section">
              <h3 className="section-title">Mis Medidas</h3>
              <ul className="section-list">
                <li>Tamaño: 52 cm</li>
                <li>Peso: 3.780 kg</li>
                <li>Nacimiento: 10/05/2024, 09:30 am</li>
              </ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title">Lo Que Me Encanta</h3>
              <ul className="section-list">
                <li>Pelotitas</li>
                <li>Cuentos</li>
                <li>Música</li>
                <li>Juguetes</li>
              </ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title">Mis Comidas Favoritas</h3>
              <ul className="section-list">
                <li>Puré de calabaza</li>
                <li>Banana</li>
                <li>Yogur</li>
                <li>Galletitas</li>
              </ul>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cerrar</AlertDialogCancel>
            <AlertDialogAction>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Sobremimodal;
