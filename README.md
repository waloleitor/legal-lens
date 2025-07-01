🇺🇸 README.md (English version)
markdown
Copiar
Editar
# LearnLegal

**LearnLegal** is a fullstack web application that simplifies complex legal documents using artificial intelligence. It empowers users to understand contracts, laws, and other legal texts in clear, accessible language.

---

## 🚀 Features

- Upload or paste legal text
- Get simplified explanations using AI
- Section-by-section breakdown
- Secure login with JWT authentication
- Document history per user
- Optional: export simplified document to PDF

---

## 🛠 Tech Stack

- **Frontend**: React
- **Backend**: Flask (Python)
- **Authentication**: JWT
- **Database**: PostgreSQL (optional, for users & history)
- **External API**: OpenAI (GPT)

---

## 📦 Project Structure

learnlegal/
├── client/ # React frontend
├── server/ # Flask backend
├── README.md
├── LICENSE

yaml
Copiar
Editar

---

## 🧑‍💻 Installation (local dev)

### Frontend
```bash
cd client
npm install
npm run dev
Backend
bash
Copiar
Editar
cd server
pipenv install
pipenv run dev
📄 License
This project is NOT open source. All rights reserved © 2025 Tomás Sarciat Roch.
Unauthorized use, distribution, or modification of this software is strictly prohibited.
