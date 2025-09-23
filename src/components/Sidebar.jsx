import Categoria from "./Categoria";
import useQuiosco from "../hooks/useQuiosco";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { categorias } = useQuiosco();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Aquí podrías limpiar cualquier estado de usuario si lo tienes
    navigate("/auth/login"); // redirige al login
  }

  return (
    <aside className="md:w-72 bg-white border-r border-gray-200 min-h-screen flex flex-col">
  {/* Logo */}
  <div className="p-6 flex justify-center items-center border-b border-gray-200">
    <img
      className="w-36 h-auto drop-shadow"
      src="img/Logotipo.jpeg"
      alt="Imagen logo"
    />
  </div>

  {/* Categorías */}
  <div className="flex-1 overflow-y-auto px-4 py-6">
    <h2 className="text-gray-600 text-xs font-semibold tracking-wider mb-4 uppercase">
      Universidades
    </h2>
      {categorias.map((categoria) => (
       <Categoria key={categoria.id} categoria={categoria} />
     ))}
     </div>
      <div className="my-5 py-5">
  <button
  type="button"
  onClick={() => navigate('/RegistroDatos')}
  className="relative inline-block p-px font-semibold leading-6 text-white 
             bg-gray-800 cursor-pointer rounded-xl 
             transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group w-full"
>
  {/* Borde degradado */}
  <span
    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 
               p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
  ></span>

  {/* Fondo interno */}
  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950 text-center w-full text-base">
    <div className="relative z-10 flex items-center justify-center space-x-2">
      <span className="transition-all duration-500 group-hover:translate-x-1">
        💰 Agregar Donación
      </span>
      <svg
        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </span>
</button>

</div>

    </aside>
  );
}
