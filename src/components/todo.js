import React, { Component } from 'react';

class Todo extends Component {
    handleDelete = e => {
        this.props.deleteTodo(e.target.dataset.id)
    }

    handleUpdate = e => {
        const { updateTodo, toggleFormVisibility } = this.props
        toggleFormVisibility()
        updateTodo(e)
    }

    render() {
        const { 
            id, 
            title, 
            date, 
            status, 
            updateTodo,
            deleteTodo
        } = this.props

        return (
            <div className="todo">
                <p>
                    {title} - 
                    {date} - 
                    {status}
                </p>
                <button 
                    data-id={id}
                    onClick={this.handleUpdate}>
                        edit
                </button>
                <button data-id={id} onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

const renderTodos = (todos, updateTodo, deleteTodo, toggleFormVisibility) => {
    const todosList = todos.map((el, i) => 
        <Todo 
            key={el.title} 
            title={el.title} 
            date={el.date} 
            status={el.status}
            id={el.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleFormVisibility={toggleFormVisibility}
        />
    )
    return todosList
}

export default renderTodos