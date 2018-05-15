import * as actions from './'

it('should create an action to add a new todo', () => {
    const expectedTodo = {
        type: 'ADD_TODO',
        id: 1,
        title: 'title',
        date: 'today',
        status: 'todo'
    } 
    expect(actions.addTodo(1, 'title', 'today', 'todo')).toEqual(expectedTodo)
})

it('should create an action to remove a todo', () => {
    const expectedTodo = {
        type: 'DELETE_TODO',
        id: 2
    }
    expect(actions.deleteTodo(2)).toEqual(expectedTodo)
})