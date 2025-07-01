from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from werkzeug.utils import secure_filename
import tempfile
import textract

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({"mensaje": "Servidor LegalLens funcionando correctamente"})

@app.route('/procesar', methods=['POST'])
def procesar_texto():
    try:
        data = request.get_json()
        texto = data.get("texto", "")

        if not texto:
            return jsonify({"mensaje": "No se recibió texto"}), 400

        respuesta = requests.post(
            "http://localhost:1234/v1/chat/completions",
            headers={"Content-Type": "application/json"},
            json={
                "model": "llama-3-8b-lexi-uncensored",
                "messages": [
                    {"role": "system", "content": "Explica el texto legal de forma sencilla en español"},
                    {"role": "user", "content": texto}
                ]
            }
        )

        resultado = respuesta.json()
        mensaje = resultado["choices"][0]["message"]["content"]
        return jsonify({"mensaje": mensaje})

    except Exception as e:
        print(e)
        return jsonify({"mensaje": "❌ Hubo un error procesando el texto"}), 500

@app.route('/leer_archivo', methods=['POST'])
def leer_archivo():
    if 'file' not in request.files:
        return jsonify({"error": "No se envió ningún archivo"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Nombre de archivo vacío"}), 400

    filename = secure_filename(file.filename)

    try:
        with tempfile.NamedTemporaryFile(delete=False) as tmp:
            file.save(tmp.name)
            texto = textract.process(tmp.name).decode('utf-8')
            os.unlink(tmp.name)

        return jsonify({"texto": texto})

    except Exception as e:
        print(e)
        return jsonify({"error": "No se pudo leer el archivo"}), 500

if __name__ == '__main__':
    app.run(debug=True)
