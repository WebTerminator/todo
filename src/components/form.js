import React, { Component } from 'react';
import Input from './../input'



class Form extends Component {
    handleCreateTodo = e => {
      const { submitForm, toggleFormVisibility } = this.props

      submitForm(e)
      toggleFormVisibility()
    }

    render() {
        const { 
            onChange, 
            submitForm, 
            editedTodo, 
            title, 
            date, 
            status 
        } = this.props

        return(
          <form>
            <Input 
              name="title" 
              type="text" 
              placeholder="task title"
              value={title} 
              onChange={onChange}
            />
            <Input 
              name="date" 
              type="date" 
              placeholder="choose a date" 
              value={date} 
              onChange={onChange} 
            />
            <Input 
              name="status" 
              type="text" 
              placeholder="set priority"
              value={status} 
              onChange={onChange} 
            />

            <button className="create" onClick={this.handleCreateTodo}>
              create
            </button>
          </form>
        )
    }
}

export default Form