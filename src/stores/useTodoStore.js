import { create } from "zustand";

// import { useStore as zustandUseStore, setActiveUser } from "./store/index.js"
export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
}));
