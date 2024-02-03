import React, { useState } from 'react'
import './style.css'
import { useTodo } from '../context/TodoContext'

function TodoList({ todo }) {
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoText, setTodoText] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleTodoCompleted } = useTodo()

    const editfunction = () => {
        if (todo.completed) return
        if (isTodoEditable === false) {
            setisTodoEditable(true)
        }
        else if (isTodoEditable) {
            setisTodoEditable(false)
            updateTodo(todo.id, { ...todo, todo: todoText })
        }
    }
    const deletefunction = () => {
        deleteTodo(todo.id)
    }
    const toggleCompleted = () => {
        toggleTodoCompleted(todo.id)

    }

    return (
        <div className={`flex listdiv ${todo.completed && 'listdivcompleted '}`} >
            <div className='leftdiv flex'>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={toggleCompleted}

                />
                <input
                    className={`editableinput ${todo.completed && 'linethrough'}`}
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    readOnly={!isTodoEditable}
                />


            </div>


            <div className='rightdiv'>
                <button className='btn2' onClick={editfunction}>
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                <button className='btn2' onClick={deletefunction}> ❌</button>
            </div>
        </div>
    )
}

export default TodoList