import Categoria from "./Categoria"
import useQuiosco from "../hooks/useQuiosco"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const { categorias } = useQuiosco();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Aquí podrías limpiar cualquier estado de usuario si lo tienes
    navigate("/auth/login"); // redirige al login
  }

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="w-48"
                src="img/Logotipo.jpeg"
                alt="Imagen logo"
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 py-5">
            <button
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                onClick={handleCerrarSesion} // <-- aquí redirige
            >
                Cerrar sesión
            </button>
        </div>
    </aside>
  )
}
