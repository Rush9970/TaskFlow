# 🎯 Animated Todo List App (Full Stack)

A beautiful, responsive, and highly interactive **Todo List** application with smooth animations, motivational UI, and persistent storage using **MongoDB**. Built with **React + Express.js + MongoDB**.

---

## ✨ Core Features

- ➕ Add new tasks with an animated input field
- ✅ Toggle task completion with visual feedback
- ❌ Delete tasks with smooth exit animations
- 🔍 Filter tasks by `All`, `Active`, or `Completed`
- 💾 Persistent storage with MongoDB (or fallback: localStorage)
- 📈 Task progress counter
- 🧠 Motivational quotes for empty task state
- 🔁 Beautiful animated transitions and sliding filter highlight

---

## 🎨 UI/UX Design Highlights

- Modern color palette with gradients and soft-glassmorphism UI
- Spacious layout with consistent 8px spacing grid
- Micro-interactions and subtle animations (Framer Motion)
- Responsive design for mobile, tablet, and desktop
- Elegant typography with excellent readability
- Soft shadows, rounded corners, and hover effects
- Clear feedback on every user interaction

---
![image](https://github.com/user-attachments/assets/e488aa2e-b822-41e9-81c0-502063c4d0eb)
![image](https://github.com/user-attachments/assets/08de6bd1-386d-4906-940b-a66c7563788b)


## 🧱 Tech Stack

| Layer     | Technologies                                |
|-----------|---------------------------------------------|
| Frontend  | React, TypeScript, Tailwind CSS, Framer Motion |
| Backend   | Node.js, Express.js, Mongoose (MongoDB)     |
| Database  | MongoDB Atlas or Local MongoDB              |
| Dev Tools | Vite, dotenv, concurrently, nodemon         |

---

## 📁 Folder Structure

```bash
fullstack-todo/
├── client/            # React frontend
│   ├── components/
│   ├── hooks/
│   ├── types/
│   ├── App.tsx
│   ├── index.html
│   └── main.tsx
├── server/            # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   └── .env
├── package.json
└── README.md

```


To get started with the app, follow these steps:

## 1. Clone the Repository
First, clone the repository to your local machine:

```bash

git clone https://github.com/your-username/fullstack-todo.git
```
cd fullstack-todo
## 2. Install Dependencies
Install dependencies for both frontend and backend.

```bash



npm install
```
## Install frontend dependencies
```bash 
cd ../client
npm install
```
## 3. MongoDB Setup
You can use either MongoDB Atlas (cloud) or MongoDB Local:

A. MongoDB Atlas
Go to MongoDB Atlas

Create a new cluster, whitelist your IP, and create a database user

Get the connection string (e.g., mongodb+srv://<username>:<password>@cluster.mongodb.net/todos)

Paste it in .env file inside the server/ folder

## B. Local MongoDB
Install MongoDB from MongoDB

Start the local server using mongod

Use the default URI: mongodb://localhost:27017/todos

4. Setup Environment Variables
Inside the server/ folder, create a .env file:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todos
```
## 5. Run the App Locally
Run the backend server and frontend application in separate terminals.

```bash

cd server
npm run server
```
In another terminal, start the frontend:
Start frontend server
```bash


cd client
npm run dev
```
🌐 App URLs:

Frontend: http://localhost:5173

Backend API: http://localhost:5000/api/tasks

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Update task (complete)
DELETE	/api/tasks/:id	Delete a task

Backend includes:
✅ RESTful routes

❗ Error handling

🌐 CORS support

🏗 Production Build
To build the production version of the app, run:

bash
Copy
Edit
cd client
npm run build
Deploy the contents of dist/ to:

Vercel, Netlify, or

Serve via backend using Express's static() middleware
