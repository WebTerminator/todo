import { todos } from './../data'

const getToDo = (state = todos, action) => {
    const { id, title, date, status } = action

    switch (action.type) {
        case 'ADD_TODO':
            return [
              ...state, 
              {id, title, date, status}
            ]

        case 'DELETE_TODO':
            let newState = [...state]
            newState = newState.filter(item => item.id != action.id)
            return newState

        case 'UPDATE_TODO':
            const stateCopy = [...state].map(item => {
              let itemWrapper = {...item}
              if(item.id === action.id){
                itemWrapper.title = action.title
              }
              return itemWrapper
            })
            return stateCopy

        default: 
            return state
    }
}

export default getToDo