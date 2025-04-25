import { useEffect, useRef } from "react";

interface ModalGaliaProps {
  cerrar: () => void;
}

export default function ModalGalia({ cerrar }: ModalGaliaProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Cerrar si se hace click fuera del modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        cerrar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cerrar]);

  const copiarCuenta = () => {
    navigator.clipboard.writeText("001782901-00001");
    alert("¡Número de cuenta copiado!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={cerrar}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-pink-600 mb-4">¡Hola! Soy Galia 💖</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm sm:text-base">
          <li>Nací el 10/05/2024</li>
          <li>Mido 72 cm</li>
          <li>Peso 10 kg y me dicen que soy una gordita preciosa</li>
          <li>Me gusta jugar con juguetes, pero casi siempre juego con cajas y tuppers</li>
          <li>Me encanta vestirme facherísima, pero solo Mamá sabe de moda 😎</li>
          <li>Me gusta salir a pasear, mirar árboles y robar hojas 🥷</li>
          <li>Soy muy curiosa, ¡me encanta investigar todo!</li>
          <li>Siempre ando sonriendo, mostrando mis dientitos y dando muchos besos 😘</li>
        </ul>

        <p className="mt-4 text-sm italic text-gray-600">
          Espero que esta guía sobre mí te sirva, pero lo que más me gusta es que me regales tu tiempo 💕.
        </p>

        <div className="mt-6 border-t pt-4 text-sm sm:text-base">
          <p className="font-semibold text-gray-800">💸 Tambien para que no te compliques mis padres me puestan la cuenta:</p>
          <p><strong>Titular:</strong> MAURO PRESTES</p>
          <p>
            <strong>Número:</strong>{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              001782901-00001
            </span>
            <button
              onClick={copiarCuenta}
              className="ml-2 text-blue-600 hover:underline text-xs"
            >
              Copiar
            </button>
          </p>
          <p><strong>Moneda:</strong> Pesos Uruguayos ($)</p>
        </div>
      </div>
    </div>
  );
}
