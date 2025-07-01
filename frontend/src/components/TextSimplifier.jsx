import { useState } from "react";

export default function TextSimplifier() {
    const [textoManual, setTextoManual] = useState("");
    const [archivo, setArchivo] = useState(null);
    const [textoProcesado, setTextoProcesado] = useState("");

    const handleArchivo = (e) => {
    const file = e.target.files[0];
    setArchivo(file);

    if (!file) return;

    const reader = new FileReader();

    if (file.type === "text/plain") {
        reader.onload = () => {
        setTextoManual(reader.result);
        };
        reader.readAsText(file);
    } else {
      // No intentamos leer aquí otros tipos: los procesa el backend
        setTextoManual("");
    }
    };

    const manejarEnvio = async () => {
    if (!textoManual && !archivo) {
        alert("Pega un texto o sube un archivo.");
        return;
    }

    const formData = new FormData();

    if (textoManual) formData.append("texto", textoManual);
    if (archivo) formData.append("archivo", archivo);

    try {
        const res = await fetch("http://localhost:5000/procesar", {
        method: "POST",
        body: formData,
        });

        if (!res.ok) throw new Error("Error en el servidor.");

        const data = await res.json();
        setTextoProcesado(data.texto_original || "No se devolvió texto.");
    } catch (err) {
        console.error(err);
        setTextoProcesado("❌ Hubo un error procesando el texto.");
    }
    };

    return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary">Simplificador Legal</h1>

        <textarea
        className="textarea textarea-bordered w-full min-h-[150px]"
        placeholder="Pega aquí tu texto legal..."
        value={textoManual}
        onChange={(e) => setTextoManual(e.target.value)}
        />

        <div>
        <label className="label">
            <span className="label-text">O sube un archivo (.txt, .pdf, .docx):</span>
        </label>
        <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleArchivo}
            className="file-input file-input-bordered w-full"
        />
        </div>

        <button className="btn btn-primary w-full" onClick={manejarEnvio}>
        Simplificar texto
        </button>

        {textoProcesado && (
        <div className="mt-6 p-4 bg-base-100 rounded-box shadow">
            <h2 className="font-bold mb-2">Texto procesado:</h2>
            <pre className="whitespace-pre-wrap">{textoProcesado}</pre>
        </div>
        )}
    </div>
    );
}