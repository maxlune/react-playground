import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, toggleIsCompletedProperty }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleIsCompletedProperty={toggleIsCompletedProperty}
        />
      ))}
    </ul>
  );
}
