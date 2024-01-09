import React from "react";

const Todo = ({ id, value, removeItem }) => {
  const handleDelete = () => removeItem(id);
  return (
    <li>
      {value}
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};
export default Todo;
