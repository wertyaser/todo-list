import React from "react";
import { useTodoStore } from "../stores/useTodoStore";

const TodoItem = ({ todo }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className="grid grid-cols-2">
      <span className="font-semibold text-xl">{todo}</span>
      <button
        onClick={() => removeTodo(todo)}
        className="bg-red-400 text-white p-2 rounded-md hover:bg-red-300 focus:bg-red-400 ring-2 text-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
