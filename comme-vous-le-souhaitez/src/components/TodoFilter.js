import React from "react";

export default function TodoFilter({ handleFilter, ...todoList }) {
  console.log("isCompleted : ", todoList.isCompleted);
  return (
    <div>
      <button onClick={handleFilter}>Sans filtre</button>
      <button onClick={handleFilter}>Fait</button>
      <button onClick={handleFilter}>A faire</button>
    </div>
  );
}
