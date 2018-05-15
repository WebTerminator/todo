import React from 'react';

const Todo = ({
    id, 
    title, 
    date, 
    status, 
    updateTodo 
}) => (
    <div>
        <p>
            {title} - 
            {date} - 
            {status}
        </p>
        <button 
            data-id={id} 
            onClick={updateTodo}>
                edit
        </button>
    </div>
);

const renderTodos = (todos) => {
    const todosList = todos.map((el, i) => 
        <Todo 
            key={el.title} 
            title={el.title} 
            date={el.date} 
            status={el.status}
        />
    )
    return todosList
}

export default renderTodos