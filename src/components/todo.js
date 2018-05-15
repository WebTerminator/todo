import React, { Component } from 'react';

class Todo extends Component {
    handleDelete = e => {
        console.log(e.target.dataset.id)
        this.props.deleteTodo(e.target.dataset.id)
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
            <div>
                <p>
                    {title} - 
                    {date} - 
                    {status}
                </p>
                <button 
                    onClick={updateTodo}>
                        edit
                </button>
                <button data-id={id} onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

const renderTodos = (todos, deleteTodo) => {
    const todosList = todos.map((el, i) => 
        <Todo 
            key={el.title} 
            title={el.title} 
            date={el.date} 
            status={el.status}
            id={el.id}
            deleteTodo={deleteTodo}
        />
    )
    return todosList
}

export default renderTodos