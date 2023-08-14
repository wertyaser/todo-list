import React, { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div className="my-6 flex justify-center gap-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className="border-green-200 shadow border rounded-md bg-gray-700 h-30"
      />
      <button
        onClick={handleAddTodo}
        className="bg-green-400 text-white p-2 rounded-md shadow-sm hover:bg-green-300 focus:bg-green-400 ring-2 text-lg"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
