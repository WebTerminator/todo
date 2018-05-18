import React, { Component } from 'react';
import Input from './../input'
import renderTodos from './todo'

import Form from './form'

import random  from 'random-utility'
import { getValue, isName } from './../util/'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: "",
      status: "",
      selectedTodoID: "",
      isEditingTrue: false
    }
  }

  getTodoID = e => e.target.dataset.id

  handleFormData = e => {
    const { todos } = this.props
    let editedTodo

    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === this.getTodoID(e)){
        editedTodo = todos[i]
      }
    }

    this.setState({
      title: editedTodo.title,
      date: editedTodo.date,
      status: editedTodo.status,
      selectedTodoID: editedTodo.id,
      isEditingTrue: true,
    })
  }

  handleOnChange = e => {
    const current = getValue(e),
          value = current.value
    
    if(isName(current.name, 'title')){
      {/* check if there is a way to update state only once for better performance */}
      this.setState({
        title: value
      })
    }
    else if(isName(current.name, 'date')) {
      this.setState({
        date: value
      })
    }
    else {
      this.setState({
        status: value
      })
    }
  }

submitForm = e => {
    e.preventDefault()
    const { addTodo, updateTodo } = this.props
    const s = this.state

    if(this.state.isEditingTrue){
      updateTodo(
        this.state.selectedTodoID,
        s.title, 
        s.date, 
        s.status
      )
    }
    else {
      const randomID = `id-${random.int()}`
  
      addTodo(
        randomID, 
        s.title, 
        s.date, 
        s.status
      )
    }
  }

  render() {
    const { todos, deleteTodo } = this.props
    return (
      <div className="app">
        <header className="app-header"></header>
        <section className="app-inner">
          <div className="app-list">
            <div className="app-task">
              <h2>Todos</h2>
              {renderTodos(todos, this.handleFormData, deleteTodo)}
            </div>
          </div>
        </section>
        <footer className="app-footer">
          <nav>
            <ul>
              <li>el1</li>
              <li>el2</li>
              <li>el3</li>
              <li>el4</li>
              <li>el5</li>
            </ul>
          </nav>
        </footer>
        <div className="overlay app-new-task">
          <Form 
            onChange={this.handleOnChange} 
            submitForm={this.submitForm} 
            editedTodo={this.state.selectedTodo}
            title={this.state.title}
            date={this.state.date}
            status={this.state.status}
          />
        </div>
      </div>
    );
  }
}

export default App;
