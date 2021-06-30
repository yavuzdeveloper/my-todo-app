import React from 'react';


const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
    
        todos.map(todo => {
            return(
                <div className="collection-item row" key={todo.id}>
                    <span >{todo.content}</span>
                    <div className="col s12 m4 l2">
                        <button onClick={() => {deleteTodo(todo.id)}}>
                            <i class="material-icons">check</i>
                        </button>
                    </div>
                </div>
            );
        })
    ):(
        <p className="center" style={{ color:"red" }}>empty to do list</p>
    );

    return(
        <div className="collection">
            { todoList }
        </div>
    );
}

export default Todos;