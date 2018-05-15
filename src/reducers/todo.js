import { todos } from './data'

export const getToDo = (state = todo, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const { id, title, date, status } = action
        return [...state, {id, title, date, status}]
      default: 
        return state
    }
  }