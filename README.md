# ✅ React To-Do App with Context & Local Storage

A clean and efficient To-Do List application built with **React**, utilizing the **Context API** for state management and **localStorage** for persistence. This app allows users to add and remove tasks with automatic saving.

---

## 🌐 Live Demo

👉 [https://mahnoorshabbir-react-todo.vercel.app/](https://mahnoorshabbir-react-todo.vercel.app/)

---

## 🚀 Features

- ➕ Add and delete to-dos
- 💾 Persistent storage using `localStorage`
- 📦 Global state management with **Context API** and `useReducer`
- 💡 Automatically saves updates
- ✨ Simple and responsive UI

---

## 📁 Folder Structure

```txt
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
