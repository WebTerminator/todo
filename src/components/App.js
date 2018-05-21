import React, { Component } from 'react';
import Input from './../input'
import renderTodos from './todo'

import Form from './form'

import random  from 'random-utility'
import { getValue, isName } from './../util/'

import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: "",
      status: "",
      selectedTodoID: "",
      isEditingTrue: false,
      isFormVisible: false
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

toggleCreateForm = () => {
  this.setState({
    isFormVisible: !this.state.isFormVisible
  })
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
      <div className={"app " + (this.state.isFormVisible ? "show-form" : "")}>
        <header className="app-header">
          <h2>Todos</h2>
        </header>
        <section className="app-inner">
          <div className="app-list">
            <div className="app-task">
              {renderTodos(todos, this.handleFormData, deleteTodo, this.toggleCreateForm)}
            </div>
          </div>
        </section>
        <footer className="app-footer">
          <button className="add" onClick={this.toggleCreateForm}>add a new task</button>
        </footer>
        <div className="overlay app-new-task">
            <button className="f-right close" onClick={this.toggleCreateForm}>close</button>
            <Form 
              onChange={this.handleOnChange} 
              submitForm={this.submitForm} 
              editedTodo={this.state.selectedTodo}
              title={this.state.title}
              date={this.state.date}
              status={this.state.status}
              toggleFormVisibility={this.toggleCreateForm}
            />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
