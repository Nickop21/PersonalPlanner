import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  const [todos, setTodo] = useState([]);
  const addTodo = (todo) => {


    setTodo((prev) => [{ ...todo }, ...prev])
    console.log(todo);
    console.log(todo.id);
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) =>

      (todo.id !== id)))
  }
  const toggleTodoCompleted = (id) => {
    setTodo((prev) => prev.map((Todo) =>
      Todo.id == id ? { ...Todo, completed: !Todo.completed } : Todo 
    ))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
 
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoCompleted }}>
      <div className="container">
        <h2 style={{ color: 'white' }}>Manage Your Day</h2>
        <TodoForm />
        {todos.map((todoitem) => (

          <div key={todoitem.id} style={{width:'700px'}}>
            <TodoList todo={todoitem} key={todoitem.id}/>
          </div>
        ))}
        
      </div>
    </TodoProvider>
  );
}

export default App;
