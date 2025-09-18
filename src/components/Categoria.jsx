import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria
    const { handleClickCategoria,categoriaActual } = useQuiosco();

  return (
    <div className={`${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img
            alt="Imagen icono"
            src={'/img/icono.jpg'}
            className="w-12"
        />

        <button
        type="button"
        className="text-lg front-bold cursor-pointer truncate"
        onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>

        </div>
  )
}
