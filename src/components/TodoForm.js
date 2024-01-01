import React, { useState } from 'react'
import './style.css'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const newtodoadd = (e) => {
    e.preventDefault()
    if (!todo) return;
    addTodo({id: Date.now(), todo, complete: false })
    console.log(todo);
  }
  return (
    <form className='main-div' onSubmit={newtodoadd}>
      <input
        type='text'
        placeholder='Write Todo..'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='adbtn'>Add</button>
    </form>
  )
}

export default TodoForm