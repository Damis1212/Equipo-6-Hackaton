import useQuiosco from "../hooks/useQuiosco"
import { formatCurrency } from "../helpers"; 
import { productos } from "../data/productos";
import RegistroDatos from "../views/RegistroDatos";
import { useNavigate } from "react-router-dom";

export default function ModalProducto() {


    const { producto, handleClickModal,descripcionLarga } = useQuiosco();
    const navigate = useNavigate(); // 👈 para navegar entre páginas


    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img
                    alt={`Imagen Producto ${producto.nombre}`}
                    src={`/img/${producto.imagen}.jpg`}
                />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">
                    {producto.nombre}
                </h1>

               <p className="text-black mt-4 mb-1 text-justify max-w-2xl">
  {producto.descripcionLarga}
</p>

                <p className="font-bold text-xl mt-4">
  ¿Por qué nos tendrías que donar?
</p>



                <p className="text-black mt-4 mb-1 text-justify max-w-2xl">
                {producto.razonDonar}

                </p>


            </div>
        </div>
    )
}
