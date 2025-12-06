import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
  logout(); // limpia contexto
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/"); // vuelve al login
};

  return (
    <header className="bg-[rgb(8_145_178)] text-white">
      <div className="flex items-center justify-between w-full p-4">
        {/* Logo solo visible cuando menú está cerrado en móvil */}
        <span className={`font-bold text-xl ${menuOpen && "md:hidden" ? "hidden" : "block"} md:block`}>INSOMAQ</span>

        {/* Botón hamburguesa fijo */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1 absolute right-4"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menú de navegación - desktop */}
        <nav className="hidden md:flex md:flex-row md:items-center md:space-x-6 text-sm">
          <Link to="/home" className="px-0 py-0 hover:text-cyan-500">INICIO</Link>
          <Link to="/Cortes" className="px-0 py-0 hover:text-cyan-500">CORTES</Link>
          <Link to="/retazos" className="px-0 py-0 hover:text-cyan-500">RETAZOS</Link>
          <Link to="/inventario" className="px-0 py-0 hover:text-cyan-500">LÁMINAS</Link>
          <Link to="/alertas" className="px-0 py-0 hover:text-cyan-500">ALERTAS</Link>
          <Link to="/maquinas" className="px-0 py-0 hover:text-cyan-500">MÁQUINAS</Link>
        </nav>

        {/* Usuario y logout - desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="font-semibold">{user?.email || "Usuario"}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden w-full bg-[rgb(8_145_178)] flex flex-col text-center text-sm">
          <Link to="/home" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">INICIO</Link>
          <Link to="/Cortes" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">CORTES</Link>
          <Link to="/retazos" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">RETAZOS</Link>
          <Link to="/inventario" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">LÁMINAS</Link>
          <Link to="/alertas" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">ALERTAS</Link>
          <Link to="/maquinas" className="block px-4 py-3 hover:text-cyan-500 border-t border-cyan-400">MÁQUINAS</Link>

          <div className="border-t border-cyan-400 px-4 py-3">
            <span className="block font-semibold mb-2">{user?.email || "Usuario"}</span>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
