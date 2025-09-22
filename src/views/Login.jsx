import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // aquí puedes validar el login si quieres
    navigate("/"); // redirige a Inicio
  };

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Para empezar con tus donaciones debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email"
              className="mt-2 block p-3 bg-gray-50"
              name="email"
              placeholder="Tu Email"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password:</label>
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
            value="Iniciar sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>

        {/* Link al registro */}
        <nav className="mt-5">
          <Link to="/auth/registro" className="text-indigo-600 hover:underline">
            ¿No tienes cuenta? Crea una
          </Link>
        </nav>
      </div>
    </>
  );
}
