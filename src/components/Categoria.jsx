import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria
    const { handleClickCategoria,categoriaActual } = useQuiosco();

  return (
    <div
      className={`${
        categoriaActual.id === id ? "bg-amber-400" : "bg-white"
      } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
    >
      <img
        alt={`Icono ${nombre}`}
        src={`/img/${icono}.jpg`} // <-- dinámico
        className="w-12 h-12 object-contain"
      />

      <button
        type="button"
        className="text-lg font-bold cursor-pointer truncate"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}
