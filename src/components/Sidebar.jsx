import Categoria from "./Categoria"
import { categorias } from "../data/categorias"


export default function Sidebar() {

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
            {categorias.map( cateroria => (
                <Categoria 
                    categoria={cateroria}
                />
        ))}

        </div>

        <div className="my-5 py-5">
            <button
                type="button"
                className="text-center bg-red-500 w-full p-3 fonr-bold text-white truncate"
            >
                Cancelar Donacion
            </button>

        </div>

        </aside>
  )
}
