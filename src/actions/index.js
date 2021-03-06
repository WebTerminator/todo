export const addTodo = (id, title, date, status) => ({
    type: 'ADD_TODO',
    id,
    title,
    date,
    status
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const updateTodo = (id, title, date, status) => ({
    type: 'UPDATE_TODO',
    id, 
    title,
    date,
    status
})