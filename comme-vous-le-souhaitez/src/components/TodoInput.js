import React from "react";

export default function TodoInput(props) {
  return <input type="text" value={props.value} 
    onChange={props.handleTodoTitleChange}
    onKeyDown={props.onKeyDown}
    ></input>;
}
