import { productos } from '../data/productos';
import { formatCurrency } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';
import { useNavigate } from 'react-router-dom';

export default function Producto({ producto }) {
    const { handleClickModal, handleSetProducto } = useQuiosco();
    const { nombre, imagen, descripcionCorta } = producto;
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={`img/${imagen}.jpg`}
                className="w-full h-52 object-cover"
                alt={`Imagen ${nombre}`}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>

                {/* Si quieres mostrar precio, descomenta esto */}
                {/* <p className="mt-3 font-black text-3xl text-amber-500 text-center">
                    {formatCurrency(precio)}
                </p> */}


                <p className="text-gray-600 mt-2 text-justify leading-relaxed">
                    {descripcionCorta}
                </p>
                
                <button
                    type="button"
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white w-full mt-5 py-3 rounded-xl uppercase font-bold tracking-wide shadow-md hover:shadow-lg transition duration-300"
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Conocer más sobre el proyecto
                </button>
            </div>
        </div>
    );
}
