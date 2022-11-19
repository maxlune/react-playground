import React from "react";

export default function TodoItem({id, title, isCompleted, isEditing, toggleIsCompletedProperty}) {
  console.log(title);
  return (
    <div>
      <span className={isCompleted ? "checked" : ""}>{title}</span>{" "}
      <button onClick={() => toggleIsCompletedProperty(id)}>Done</button>
    </div>
  )
}
