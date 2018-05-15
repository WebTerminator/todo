import React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../actions'
import App from './../App'

const mapStateToProps = state => ({
  todos: state.getToDo
})
 
const mapDispatchToProps = dispatch => ({
  addTodo: (id, date, title, status) => dispatch(addTodo(id, date, title, status)),
})
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)