/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import TodoForm from './TodoForm'
//Function of the todo list
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    //Updates the changed item
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        }
        )
    }
    //Pulls the form for updating the item
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    //Displays the task in the local spot
    return todos.map((todo) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo}>
            <div key={todo._id} onClick={() => completeTodo(todo._id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <button onClick={() => removeTodo(todo._id)}
                    className='delete-btn'>Delete</button>
                <button onClick={() => setEdit({ id: todo._id, value: todo.text })}
                    className='edit-btn'>Edit</button>
            </div>
        </div>

    ))
}
export default Todo