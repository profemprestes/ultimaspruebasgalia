interface ModalGaliaProps {
    cerrar: () => void;
  }
  
  export default function ModalGalia({ cerrar }: ModalGaliaProps) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
          <button
            onClick={cerrar}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">¡Hola! Soy Galia 💖</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Nací el 10/05/2024</li>
            <li>Mido 72 cm</li>
            <li>Peso 10 kg y me dicen que soy una gordita preciosa</li>
            <li>Me gusta jugar con juguetes, pero casi siempre juego con cajas y tuppers</li>
            <li>Me encanta vestirme facherísima, pero solo Mamá sabe de moda 😎</li>
            <li>Me gusta salir a pasear, mirar árboles y robar hojas 🥷</li>
            <li>Soy muy curiosa, ¡me encanta investigar todo!</li>
            <li>Siempre ando sonriendo, mostrando mis dientitos y dando muchos besos 😘</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600 italic">
            Espero que esta guía sobre mí te sirva, pero lo que más me gusta es que me regales tu tiempo 💕.
          </p>
        </div>
      </div>
    );
  }
  