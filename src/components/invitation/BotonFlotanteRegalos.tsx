import { useState } from "react";
import { Gift } from "lucide-react";
import ModalGalia from "./ModalGalia";

export default function BotonFlotanteRegalos() {
  const [abierto, setAbierto] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-4 left-4 z-50 flex items-center space-x-2 
        transition-all duration-300 group cursor-pointer`}
        onMouseEnter={() => setAbierto(true)}
        onMouseLeave={() => setAbierto(false)}
        onClick={() => setMostrarModal(true)}
      >
        <div className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg">
          <Gift size={24} />
        </div>
        <span
          className={`${
            abierto ? "opacity-100 ml-2" : "opacity-0 ml-0"
          } bg-white text-black text-sm px-3 py-1 rounded-lg shadow transition-all duration-300`}
        >
          Datos Sobre Mí
        </span>
      </div>

      {mostrarModal && (
        <ModalGalia cerrar={() => setMostrarModal(false)} />
      )}
    </>
  );
}
