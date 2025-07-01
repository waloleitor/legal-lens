# LegalLens

## Descripción

LegalLens es una aplicación web que permite simplificar y explicar textos legales complejos de manera clara y accesible para cualquier persona. Utiliza un modelo de lenguaje avanzado alojado localmente (Lexi LLaMA 3 8B Uncensored) para procesar y resumir textos legales pegados por el usuario.

Actualmente, LegalLens ofrece la funcionalidad de pegar texto directamente en el formulario para obtener su explicación simplificada. La carga y procesamiento de archivos (PDF, DOCX, TXT) está en desarrollo y estará disponible en próximas versiones.

---

## Características principales

- Interfaz sencilla y responsiva para pegar textos legales.
- Procesamiento local mediante un modelo de lenguaje avanzado que simplifica y explica el contenido.
- Respuestas rápidas y personalizadas en lenguaje claro y accesible.
- Backend construido con Flask, que se comunica con el modelo local alojado en LM Studio.
- Frontend desarrollado en React con DaisyUI para una experiencia visual moderna y adaptativa.

---

## Estado actual

- **Funcionalidad activa:** Pegado y procesamiento de textos legales.
- **Funcionalidad en desarrollo:** Carga y extracción de texto desde archivos PDF, DOCX y TXT. (aún en proceso)

---

## Tecnologías utilizadas

- **Frontend:** React, DaisyUI, TailwindCSS.
- **Backend:** Python, Flask, Requests, Flask-CORS.
- **Modelo de lenguaje:** Lexi LLaMA 3 8B Uncensored ejecutado en LM Studio localmente.
- **Procesamiento de texto:** Textract (en desarrollo para extracción desde archivos).

---

## Requisitos

- Python 3.13 o superior.
- Node.js y npm.
- LM Studio con modelo Lexi LLaMA 3 8B Uncensored configurado y en ejecución local.
- Entornos virtuales gestionados con Pipenv.

---

## Instalación y ejecución

### Backend

1. Clonar el repositorio y acceder a la carpeta `backend`.
2. Instalar dependencias y activar entorno virtual:

```bash
pipenv install
pipenv shell
Ejecutar el servidor Flask:

python app.py
Frontend
Acceder a la carpeta frontend.

Instalar dependencias:

npm install
Ejecutar el servidor de desarrollo:

npm run dev

```
---
#Uso
Acceder a la interfaz web en http://localhost:5173 (puerto por defecto).

Pegar el texto legal en el área de texto.

Hacer clic en “Procesar Texto Legal” para obtener una explicación simplificada.

En futuras versiones se podrá subir un archivo para procesar su contenido.

#Contribuciones
Agradecemos cualquier colaboración o sugerencia para mejorar LegalLens.
Por favor, abrir un issue o enviar un pull request con tus aportes.

#Licencia
El código fuente de LegalLens es propiedad exclusiva del autor y está protegido.
No se permite la copia, distribución o uso sin autorización expresa.

#Contacto
Desarrollador: Tomás Sarciat Roch // Waloleitor
Email: tsarciatroch@gmail.com
Málaga, España
