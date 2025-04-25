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
import { X, ImagePlus, Loader2 } from "lucide-react";

interface MensajeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGE_LENGTH = 140;

export default function MensajeModal({ isOpen, onClose }: MensajeModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); // Keep track of the file itself if needed for upload
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      // Basic validation (optional: add size/type checks)
      if (file.size > 5 * 1024 * 1024) { // Example: 5MB limit
         toast({
            variant: "destructive",
            title: "Error",
            description: "La imagen es demasiado grande (máximo 5MB).",
         });
         return;
      }
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

  const resetForm = () => {
    setName("");
    setMessage("");
    handleRemoveImage();
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!name.trim() || !message.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, completa tu nombre y el mensaje.",
      });
      setIsSubmitting(false);
      return;
    }

    // **Image Handling Simulation:**
    // In a real app, you'd upload imageFile here and get a URL.
    // For now, we'll just pass the preview data URI (if exists) or null.
    // This is NOT a production-ready solution for image handling.
    // const imageUrl = imagePreview; // Sending Data URI - not recommended for large images

    const payload = {
      name: name.trim(),
      message: message.trim(),
      // imageUrl: imageUrl, // Excluding image URL for now as API only expects name/message
    };

    try {
      const response = await fetch('/api/mensajes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje.');
      }

      const result = await response.json();

      toast({
        title: "¡Mensaje Enviado!",
        description: "Gracias por dejar tu mensaje con cariño.",
      });

      resetForm();
      onClose();

    } catch (error) {
      console.error("Error submitting message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const remainingChars = MAX_MESSAGE_LENGTH - message.length;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { resetForm(); onClose(); } }}>
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
            {/* Name Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-sm font-medium">
                Nombre <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="Tu nombre"
                required
                disabled={isSubmitting}
              />
            </div>
            {/* Message Field */}
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="message" className="text-right pt-2 text-sm font-medium">
                Mensaje <span className="text-destructive">*</span>
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
                  disabled={isSubmitting}
                />
                <p className={`text-xs mt-1 ${remainingChars < 20 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {remainingChars} caracteres restantes
                </p>
              </div>
            </div>
            {/* Image Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="picture" className="text-right text-sm font-medium">
                Foto
                <span className="block text-xs text-muted-foreground">(Opcional)</span>
              </Label>
              <div className="col-span-3 flex items-center gap-2">
                 {imagePreview ? (
                  <div className="relative group">
                     <img src={imagePreview} alt="Preview" className="w-16 h-16 rounded-md object-cover border" />
                     <Button
                       type="button"
                       variant="ghost"
                       size="icon"
                       className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                       onClick={handleRemoveImage}
                       disabled={isSubmitting}
                       aria-label="Remover imagen"
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
                    disabled={isSubmitting}
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
                    accept="image/png, image/jpeg, image/gif, image/webp" // Specify accepted types
                    disabled={isSubmitting}
                 />
               </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
