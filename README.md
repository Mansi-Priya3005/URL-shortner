🔗 URL Shortener – Full Stack Application

A modern full-stack URL Shortener application that converts long URLs into clean, shareable short links.
Built with a focus on clean UI, real-world backend logic, and scalable architecture.

This repository contains both frontend and backend of the application.

✨ Features

🔗 Shorten long URLs instantly

✏️ Custom URL slugs (for authenticated users)

📋 One-click copy to clipboard

⚡ Loading & error handling for better UX

🎨 Responsive UI using Tailwind CSS

🔄 Automatic cache refresh using React Query

🔐 Authentication-aware frontend behavior

🧠 How It Works

User enters a long URL

(Optional) Authenticated users can provide a custom slug

Frontend sends request to backend API

Backend generates a unique shortened URL

User copies and shares the link

🛠️ Tech Stack
Frontend

React

Vite

Tailwind CSS

Redux Toolkit

React Query

Backend

Node.js

Express.js

MongoDB

REST APIs

📂 Project Structure
URL-SHORTENER/
├── FRONTEND/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── BACKEND/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md

▶️ Running the Project Locally
Frontend
cd FRONTEND
npm install
npm run dev


Frontend runs at:

http://localhost:5173

Backend
cd BACKEND
npm install
npm start


Backend runs at:

http://localhost:5000

🚀 Future Enhancements

📊 URL analytics (click tracking)

🌙 Dark mode

🕒 Recently shortened URLs history

🔐 Role-based access control

🚀 Deployment (Vercel / Render)

👩‍💻 Author

Mansi Priya
Second-year engineering student with a strong interest in
Frontend Development, Full-Stack Engineering, and Scalable Web Applications.

⭐ Why This Project

This project demonstrates:

Real-world full-stack architecture

Clean React component design

REST API integration

Authentication-aware UI logic

Focus on UX and maintainability

Suitable for SDE internships, frontend roles, and portfolio projects.