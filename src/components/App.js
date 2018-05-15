import React, { Component } from 'react';
import Input from './../input'
import renderTodos from './todo'

import { getValue, isName } from './../util/'
import random  from 'random-utility'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: "",
      status: ""
    }
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

    const { addTodo } = this.props
    const s = this.state
    const randomID = `id-${random.int()}`

    addTodo(
      randomID, 
      s.title, 
      s.date, 
      s.status
    )
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
              {renderTodos(todos, deleteTodo)}
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
          <form>
            {/* create array to read inputs from */}
            <Input name="title" type="text" onChange={this.handleOnChange} />
            <Input name="date" type="date"  onChange={this.handleOnChange} />
            <Input name="status" type="text"  onChange={this.handleOnChange} />

            <button onClick={this.submitForm}>create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
