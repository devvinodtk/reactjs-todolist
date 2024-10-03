import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
    const {todos} = props;
    return(
        <ul className='main'>
            {
                todos.map((todo, index)=> {
                    return(
                        <TodoCard key={index} {...props} index={index}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                } )
            }
        </ul>
    )
}

export default TodoList;