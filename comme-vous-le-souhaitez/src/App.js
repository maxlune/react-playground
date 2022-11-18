import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState({
    id: 1,
    title: '',
    isCompleted : false,
    isEditing: false
})

useEffect(() => {
  console.log(newTodo);
}, [newTodo])


const handleTodoTitleChange = (e) => {
  setNewTodo((prevState) => ({...prevState, title: e.target.value}))
}

  return (
    <div className="App">
      <TodoInput value={newTodo.title} handleTodoTitleChange={handleTodoTitleChange}/>
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
    </div>
  );
}

export default App;
