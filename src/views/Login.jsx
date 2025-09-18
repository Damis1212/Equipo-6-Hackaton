import { Link } from "react-router-dom";

export default function Login() {
  return (
   <>
        <h1 className="text-4xl front-black">Iniciar sesion</h1>
    <p>Para empezar con tus donaciones debes iniciar sesion</p>

    <div className= "bg-write shadow-md rounded-md mt-10 px-5 py-10">
        <form>

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

                
                <input
                    type="submit"
                    value="Iniciar sesion"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
                    uppercase font-bold cursor-pointer"
                />

        </form>

    </div>

    <nav className="mt-5">
        <Link to="/auth/registro">
        No tienes cuenta? Crea una
        
        </Link>

    </nav>

    </>
  )
}
