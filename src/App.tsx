import { useState } from "react";
import { z } from "zod";

const esquemaAlumno = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("El email no es válido"),
  curso: z.enum(["1 DAM", "2 DAM"]),
});

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("1 DAM");
  const [datos, setDatos] = useState<string>("");

  const validarYGuardar = () => {
    const alumno = { nombre, email, curso };

    const resultado = esquemaAlumno.safeParse(alumno);

    if (resultado.success) {
      alert("Todo correcto");
      setDatos(JSON.stringify(resultado.data, null, 2));
    } else {
      alert(resultado.error.issues[0].message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Formulario de registro</h1>

        <input
          className="mb-3 w-full rounded border p-2"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="mb-3 w-full rounded border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mb-3 w-full rounded border p-2"
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />

        <button
          className="w-full rounded bg-blue-600 p-2 text-white"
          onClick={validarYGuardar}
        >
          Validar y guardar
        </button>

        {datos && (
          <pre className="mt-4 rounded bg-gray-200 p-3 text-sm">{datos}</pre>
        )}
      </div>
    </div>
  );
}