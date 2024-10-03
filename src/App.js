import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todosList = [
      'Go to the gym',
      'Eat more fruits and vege',
      'Pick up the kid from School'
  ];
  const [todos, setTodos]= useState(todosList)
  const [newTodoValue, setNewTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }
  const handleAddTodos = (newTodo) => {
    const newTodos = [...todos, newTodo];
    persistData(newTodos);
    setTodos(newTodos)
  }

  const handleDeleteTodo =(index) => {
    const newTodos = todos.filter((item, todoIndex) => (todoIndex !== index))
    persistData(newTodos)
    setTodos(newTodos);
  }

  const handleEditTodo = (index) =>{
    const toDoToEdit = todos.filter((item, todoIndex) => todoIndex === index)
    setNewTodoValue(toDoToEdit);
    handleDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage) {
      return
    }

    let localTodos=localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    localTodos =JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])


  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} newTodoValue={newTodoValue} setNewTodoValue={setNewTodoValue}/>
      <TodoList todos={todos} handleEditTodo= {handleEditTodo}  handleDeleteTodo = {handleDeleteTodo} />
    </>
  );
}

export default App;
