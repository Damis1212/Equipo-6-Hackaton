import {Link} from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl front-black">Crea tu cuenta</h1>
    <p>Crea tu cuenta llenando tu formulario</p>

    <div className= "bg-write shadow-md rounded-md mt-10 px-5 py-10">
        <form>
            <div className= "mb-4">
                <label
                className="text-slate-800"
                htmlFor="name"
               >Nombre:</label>

                <input 
                type="text" 
                id="name"
                className="mt-2 block p-3 bg-gray-50"
                name="name"
                placeholder="Tu nombre"
                />
                </div>

                <div className= "mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="email"
               >Email:</label>

                <input 
                    type="email" 
                    id="email"
                    className="mt-2 block p-3 bg-gray-50"
                    name="email"
                    placeholder="Tu Email"
                />
                </div>

                <div className= "mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="password"
               >Email:</label>

                <input 
                    type="password" 
                    id="password"
                    className="mt-2 block p-3 bg-gray-50"
                    name="password"
                    placeholder="Tu password"
                />
                </div>

                <div className= "mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="password_confirmation"
               >Repetir Password:</label>

                <input 
                    type="password" 
                    id="password_confirmation"
                    className="mt-2 block p-3 bg-gray-50"
                    name="password_confirmation"
                    placeholder="Repetir password"
                />
                </div>
                <input
                    type="submit"
                    value="Crear cuenta"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
                    uppercase font-bold cursor-pointer"
                />

        </form>

        <nav className="mt-5">
          <Link to="/auth/login" className="text-indigo-600 hover:underline">
                Ya tienes cuenta? Inicia sesion
          </Link>
        </nav>

    </div>

    </>
   
  )
}
