import React, { Component } from 'react';
import Input from './../input'



class Form extends Component {
    render() {
        const { onChange, submitForm, editedTodo } = this.props
        return(
          <form>
            <Input name="title" type="text" value={this.props.title} onChange={onChange} />
            <Input name="date" type="text"  value={this.props.date} onChange={onChange} />
            <Input name="status" type="text" value={this.props.status} onChange={onChange} />

            <button onClick={this.submitForm}>create</button>
          </form>
        )
    }
}

export default Form