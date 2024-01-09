import React, { useState } from "react";

const TodoForm = ({ addItem }) => {
  const INITIAL_VALUES = { todo: "" };
  const [data, setData] = useState(INITIAL_VALUES);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...data });
    setData(INITIAL_VALUES);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">To Do</label>
        <input
          id="todo"
          name="todo"
          value={data.todo}
          placeholder="To Do"
          onChange={handleChange}
          type="text"
        />
        <button>Add to the list</button>
      </form>
    </div>
  );
};

export default TodoForm;
