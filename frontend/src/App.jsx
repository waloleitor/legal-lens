import React, { useState } from "react";

function App() {
  const [textoPegado, setTextoPegado] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [respuesta, setRespuesta] = useState(null);

  const leerArchivo = async (file) => {
    const extension = file.name.split(".").pop().toLowerCase();

    if (extension === "txt") {
      return await file.text();
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/leer_archivo", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.texto || "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let textoFinal = textoPegado;

    if (!textoPegado && archivo) {
      textoFinal = await leerArchivo(archivo);
    }

    try {
      const response = await fetch("http://localhost:5000/procesar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ texto: textoFinal }),
      });

      const data = await response.json();

      if (response.ok) {
        setRespuesta(data.mensaje);
      } else {
        setRespuesta("❌ Hubo un error procesando el texto.");
      }
    } catch (error) {
      console.error(error);
      setRespuesta("❌ Error de conexión con el servidor.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-200 text-base-content">
      <h1 className="text-3xl font-bold mb-6">LegalLens</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
        <textarea
          className="textarea textarea-bordered w-full"
          rows={6}
          placeholder="Pega aquí el texto legal..."
          value={textoPegado}
          onChange={(e) => setTextoPegado(e.target.value)}
        />

        <input
          type="file"
          accept=".txt,.pdf,.docx"
          className="file-input file-input-bordered w-full"
          onChange={(e) => setArchivo(e.target.files[0])}
        />

        <button type="submit" className="btn btn-primary w-full">
          Procesar Texto Legal
        </button>
      </form>

      {respuesta && (
        <div className="mt-6 alert alert-info shadow-lg w-full max-w-xl">
          <span>{respuesta}</span>
        </div>
      )}
    </div>
  );
}

export default App;
