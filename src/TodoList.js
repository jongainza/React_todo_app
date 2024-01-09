import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const INITIAL_VALUES = [
    {
      id: "",
      key: "",
      value: "",
    },
  ];
  const [todos, setTodos] = useState([]);

  const addItem = (newItem) => {
    setTodos([...todos, { value: newItem.todo, id: uuidv4() }]);
  };

  const removeItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>ToDo List!</h3>
      {todos.map((t) => (
        <ul>
          <Todo value={t.value} id={t.id} key={t.id} removeItem={removeItem} />
        </ul>
      ))}
      <TodoForm addItem={addItem} />
    </div>
  );
};

export default TodoList;
