import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './../actions'
import App from './../components/App'

const mapStateToProps = state => ({
  todos: state.getToDo
})
 
const mapDispatchToProps = dispatch => ({
  addTodo: (id, date, title, status) => dispatch(addTodo(id, date, title, status)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: (id, title, date, status) => dispatch(updateTodo(id, title, date, status)) 
})
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)