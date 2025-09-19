import useQuiosco from "../hooks/useQuiosco"
import { formatCurrency } from "../helpers";

export default function ModalProducto() {

    const { producto, handleClickModal } = useQuiosco();

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

                <p>
                    Aqui hiria una breve descripcion
                </p>

                <input 
  className="input w-full px-40 py-2 mt-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200" 
  type="text" 
  placeholder="Ingresa tu monto deseado a donar">
                </input>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                >
                    Donar a esta persona
                </button>

            </div>
        </div>
    )
}
