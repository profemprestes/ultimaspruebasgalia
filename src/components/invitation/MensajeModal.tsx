"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X, ImagePlus } from "lucide-react";

interface MensajeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGE_LENGTH = 140;

export default function MensajeModal({ isOpen, onClose }: MensajeModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_MESSAGE_LENGTH) {
      setMessage(text);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !message.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, completa tu nombre y el mensaje.",
      });
      return;
    }

    // Simulate submission (replace with actual API call)
    console.log("Submitting message:", { name, message, imageFile });

    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por dejar tu mensaje con cariño.",
    });

    // Reset form and close modal
    setName("");
    setMessage("");
    handleRemoveImage();
    onClose();
  };

  const remainingChars = MAX_MESSAGE_LENGTH - message.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px] bg-card text-card-foreground rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            Deja tu Mensaje con Cariño
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tu mensaje se mostrará en vivo durante la fiesta. ¡Comparte tus
            buenos deseos!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-sm font-medium">
                Nombre
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="message" className="text-right pt-2 text-sm font-medium">
                Mensaje
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  className="min-h-[100px]"
                  placeholder="Escribe aquí tu mensaje..."
                  maxLength={MAX_MESSAGE_LENGTH}
                  required
                />
                <p className={`text-xs mt-1 ${remainingChars < 20 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {remainingChars} caracteres restantes
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="picture" className="text-right text-sm font-medium">
                Foto (Opcional)
              </Label>
              <div className="col-span-3 flex items-center gap-2">
                 {imagePreview ? (
                  <div className="relative group">
                     <img src={imagePreview} alt="Preview" className="w-16 h-16 rounded-md object-cover border" />
                     <Button
                       type="button"
                       variant="ghost"
                       size="icon"
                       className="absolute top-0 right-0 w-5 h-5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                       onClick={handleRemoveImage}
                     >
                       <X size={12} />
                     </Button>
                  </div>
                 ) : (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImagePlus size={16} />
                    Subir Imagen
                  </Button>
                 )}
                 <Input
                    id="picture"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                 />
               </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Enviar Mensaje
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
