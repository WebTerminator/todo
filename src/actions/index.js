export const addTodo = (id, title, date, status) => ({
    type: 'ADD_TODO',
    id,
    title,
    date,
    status
})