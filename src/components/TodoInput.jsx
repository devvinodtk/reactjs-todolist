import React, { useState } from 'react';

const TodoInput = (props) => {
    const {handleAddTodos, newTodoValue, setNewTodoValue} = props;
    const updateToDoList = () => {
        if(!!newTodoValue){
            handleAddTodos(newTodoValue)
            setNewTodoValue("");
        }
    }

    return(
        <div>
            <header>
                <input onChange={(e)=>setNewTodoValue(e.target.value)} placeholder='Enter to do..' value={newTodoValue} />
                <button onKeyDown={(e)=> (e.key === 'Enter') ? updateToDoList(): null} onClick={() => updateToDoList()}>Add</button>
            </header>
            
        </div>
    )
}

export default TodoInput;