📝 Task Manager App (MERN)

Application de gestion de tâches réalisée avec la pile MERN (MongoDB, Express.js, React, Node.js).
Elle permet de s’inscrire, se connecter et gérer ses tâches (ajout, suppression, liste).

📌 1. Fonctionnalités

🔑 Authentification (Register / Login) avec JWT

➕ Ajouter une tâche

❌ Supprimer une tâche

📋 Lister toutes les tâches

👤 Gestion du compte utilisateur (stocké dans MongoDB)

🌐 Séparation Backend (Node.js/Express) et Frontend (React)

🏗 2. Technologies utilisées

Backend : Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT
Frontend : React, React Router, Axios, Context API
Outils : Postman (tests API), npm/yarn

⚙️ 3. Installation du projet

3.1. Cloner le projet
git clone https://github.com/ASMAA1369/Task-manager-app.git
cd task-manager-app

3.2. Backend
cd backend
npm install

Créer un fichier .env dans backend/ :

MONGO_URI=mongodb://127.0.0.1:27017/taskdb
JWT_SECRET=monsecret
PORT=5000

Lancer le backend :

npm start
👉 API dispo sur http://localhost:5000/api

3.3. Frontend

cd ../frontend
npm install
npm start

👉 Frontend dispo sur http://localhost:3000

🚀 4. Lancement

Backend : http://localhost:5000
Frontend : http://localhost:3000

🔑 5. Routes API principales

Auth :

POST /api/users/register → Créer un utilisateur
POST /api/users/login → Connexion + token JWT

Tasks :

GET /api/tasks → Récupérer les tâches de l’utilisateur connecté
POST /api/tasks → Ajouter une nouvelle tâche
DELETE /api/tasks/:id → Supprimer une tâche

🧪 6. Tests avec Postman

Créer un utilisateur : POST http://localhost:5000/api/users/register

Se connecter : POST http://localhost:5000/api/users/login → récupérer le token

Ajouter une tâche : POST http://localhost:5000/api/tasks (ajouter Authorization: Bearer TOKEN)

Lister les tâches : GET http://localhost:5000/api/tasks

Supprimer une tâche : DELETE http://localhost:5000/api/tasks/:id

Autheur 
ASMAA Jebbar 
📅 Année : 2025