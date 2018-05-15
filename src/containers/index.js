import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from './../actions'
import App from './../components/App'

const mapStateToProps = state => ({
  todos: state.getToDo
})
 
const mapDispatchToProps = dispatch => ({
  addTodo: (id, date, title, status) => dispatch(addTodo(id, date, title, status)),
  deleteTodo: id => dispatch(deleteTodo(id))
})
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)