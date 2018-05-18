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
              value={title} 
              onChange={onChange} 
            />
            <Input 
              name="date" 
              type="text"  
              value={date} 
              onChange={onChange} 
            />
            <Input 
              name="status" 
              type="text" 
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