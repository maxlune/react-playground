import React from "react";

export default function TodoInput(props) {
  return <input type="text" value={props.value} 
    onChange={props.handleTodoTitleChange}
    onKeyDown={props.onKeyDown}
    ></input>;
}

// CORR
// export default function TodoInput({ title }) {
//   return <input type={title} onChange={(e) => handleTitleChange(e.target.value)} 
//     onKeyDown={handleKeyDown} />
// }