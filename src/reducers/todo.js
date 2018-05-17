import { todos } from './../data'

const getToDo = (state = todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, title, date, status } = action
            return [...state, {id, title, date, status}]
        case 'DELETE_TODO':
            let newState = [...state]
            newState = newState.filter(item => item.id != action.id)
            return newState
        default: 
            return state
    }
}

export default getToDo