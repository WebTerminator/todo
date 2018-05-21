import React, { Component } from 'react';
import Input from './../input'



class Form extends Component {
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

            <button onClick={submitForm}>
              create
            </button>
          </form>
        )
    }
}

export default Form