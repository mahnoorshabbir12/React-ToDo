import React, { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "msg",
            completed : false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}    
})

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;
