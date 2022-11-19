import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);

  // useEffect(() => {
  //   console.log(newTodo);
  // }, [newTodo])

  const [todoList, setTodoList] = useState([]);

  const [isCompleted, setIsCompleted] = useState(false);

  const [todoListFiltered, setTodoListFiltered] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleTodoTitleChange = (e) => {
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleOnKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        setTodoList((prevState) => [...prevState, newTodo]);
        Object.assign(todoModel, { id: ++todoModel.id });
        setNewTodo(todoModel);
        break;
      case "Escape":
        setNewTodo((prevState) => ({ ...prevState, title: "" }));
        break;
      default:
        break;
    }
  };

  const toggleIsCompletedProperty = (id) => {
    console.log(id);
    setTodoList((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };

  const handleFilter = () => {
    setTodoListFiltered((prevState) => {});
  };

  return (
    <div className="App">
      <TodoFilter todoList={todoList} handleFilter={handleFilter} />
      <TodoInput
        value={newTodo.title}
        handleTodoTitleChange={handleTodoTitleChange}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <TodoList
        items={todoList}
        toggleIsCompletedProperty={toggleIsCompletedProperty}
      />
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
    </div>
  );
}

export default App;

// ===================================

// function App() {
//   const [newTodo, setNewTodo] = useState(todoModel);
//   const [todoList, setTodoList] = useState([]);
//   const [todoListFiltered, setTodoListFiltered] = useState(todoList);

//   useEffect(() => {
//     setTodoListFiltered(todoList)
//   }, [todoList])

//   const handleTodoTitleChange = (e) => {
//     setNewTodo((prevState) => ( { ...prevState, title: e.target.value } ));
//   };

//   const handleOnKeyDown = (e) => {
//     switch (e.key) {
//       case "Enter":
//         setTodoList( (prevState) => ([...prevState, newTodo]))
//         Object.assign(todoModel, { id: ++todoModel.id })
//         setNewTodo(todoModel);
//         break;
//       case "Escape":
//         setNewTodo((prevState) => ({ ...prevState, title: "" }));
//         break;

//       default:
//         break;
//     }
//   };

//   const toggleIsCompletedProperty = (id) => {
//     setTodoList((prevState) => prevState.map(item => {
//       if (item.id == id) return {...item, isCompleted: !item.isCompleted}

//       return item
//     }))
//   }

//   const handleFilter = (filter) => {
//     switch (filter) {
//       case "none":
//         setTodoListFiltered(todoList)
//         break;
//       case "complete":
//         setTodoListFiltered(todoList.filter(todo => todo.isCompleted))
//       break
//       case "uncomplete":
//         setTodoListFiltered(todoList.filter(todo => !todo.isCompleted))
//         break;
//     }
//   }

//   return (
//     <div className="App">
//       <TodoFilter handleFilter={handleFilter}/>
//       <TodoInput
//         value={newTodo.title}
//         handleTodoTitleChange={handleTodoTitleChange}
//         onKeyDown={(e) => handleOnKeyDown(e)}
//       />
//       <TodoList items={todoListFiltered} toggleIsCompletedProperty={toggleIsCompletedProperty} />
//       {/* Le composant doit afficher :
//         - L'input
//         - le composant qui affiche les filtres
//         - La liste des todos
//       */}
//     </div>
//   );
// }
