# ✅ React To-Do App with Context & Local Storage

A minimal and elegant To-Do List application built using **React**, **Context API**, and **Local Storage**. It allows users to add, delete, and manage their tasks efficiently with persistent state.

---

## 🌐 Live Demo

👉 [https://mahnoorshabbir-react-todo.vercel.app/](https://mahnoorshabbir-react-todo.vercel.app/)

---

## 🚀 Features

- ➕ Add and remove to-dos
- 📦 Persistent storage using `localStorage`
- 🧠 Global state management with **React Context API**
- ♻️ Automatically saves changes
- ✨ Clean and responsive UI

---

## 📁 Folder Structure

src/
├── components/
│   ├── ToDoForm.jsx       # Form for adding new tasks
│   └── ToDoItem.jsx       # Individual task item
│
├── context/
│   ├── Index.js           # Context provider wrapper
│   └── ToDoContext.js     # useReducer + context logic
│
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles


---

## 🧠 Technologies Used

- ⚛️ React
- 📦 Context API + `useReducer`
- 💾 localStorage
- 💅 Tailwind CSS (or plain CSS)

---

## 🛠 How It Works

- `ToDoContext.js` contains reducer logic and localStorage syncing
- `Index.js` wraps your app with `<ToDoProvider>`
- `ToDoForm` adds new todos via dispatch
- `ToDoItem` displays and removes todos
- State is synced to localStorage on every change

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/react-todo-context.git

# Navigate to project folder
cd react-todo-context

# Install dependencies
npm install

# Start the dev server
npm run dev
