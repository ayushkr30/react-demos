import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [inputValues, setInputValues] = useState("");

    const handleSubmit = e => { 
        e.preventDefault();

        if(inputValues.trim()){
            setTodos([...todos, inputValues]);
            setInputValues("");
        }
    };


    const handleChange = e => {
        setInputValues(e.target.value);

    }


  return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValues} onChange={handleChange} placeholder='Add a new Todo' />

            <button type='submit'>Add Todo</button>
        </form>

        <ul>
            {todos.map((todo, index)=> (
                <li>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList