import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/registrarse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, email, contrasena: contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("✅ Registro exitoso. Redirigiendo...");
        setTimeout(() => navigate("/"), 1500); // redirige al login
      } else {
        setMensaje(data.message || "Error al registrarse");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-inter bg-gray-100">
      {/* IZQUIERDA - Formulario */}
      <div className="flex flex-col justify-center px-6 md:px-20 bg-white w-full md:w-1/2">
        <img
          src="https://insomaq.com/wp-content/uploads/2023/09/cropped-logo-insomaq-horizontal-1.png"
          alt="Insomaq Logo"
          className="w-[250px] md:w-[350px] mb-8 mt-6 mx-auto md:mx-0"
        />

        <h2 className="text-2xl font-semibold mb-8 text-gray-800 leading-tight">
          Crear una cuenta en Insomaq
        </h2>

        <form onSubmit={handleSubmit} className="max-w-lg">
          {mensaje && (
            <p
              className={`mb-4 ${
                mensaje.includes("✅")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {mensaje}
            </p>
          )}

          <label className="block mb-2 font-medium text-gray-700">
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <label className="block mb-2 font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <label className="block mb-2 font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-medium transition mb-4"
          >
            Registrarse
          </button>
        </form>

      </div>

      {/* DERECHA - Imagen y bienvenida */}
      <div
        className="hidden md:flex flex-col justify-center items-center text-white w-full md:w-1/2 bg-cyan-600 text-center px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://insomaq.com/wp-content/uploads/2024/10/Insomaq-3-e1728386607604.webp")',
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          ¡ÚNETE A INSOMAQ!
        </h1>
        <p className="text-lg max-w-md text-gray-200">
          Metalizando tus sueños, construyendo realidades...
        </p>
      </div>

      {/* Opción de login en móvil */}
      <div className="md:hidden flex flex-col items-center justify-center bg-cyan-600 text-white px-6 py-4 mt-4 rounded-md">
        <p className="text-sm mb-3">¿Ya tienes una cuenta?</p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-cyan-600 font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition w-full max-w-xs"
        >
          Iniciar sesión aquí
        </button>
      </div>
    </div>
  );
}
