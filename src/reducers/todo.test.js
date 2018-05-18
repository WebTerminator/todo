import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import reducer  from './todo'
import { todos } from './../data'

const todoDetails = {        
    id: 1,
    title: 'title',
    date: 'today',
    status: 'to do'
}

const actionDelete = {
    type: 'DELETE_TODO',
    ...todoDetails
} 

const actionAdd = {
    type: 'ADD_TODO',
    ...todoDetails
} 

const state = []

it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual(todos)
})

it('should add a todo', () => {
    expect(reducer(state, actionAdd)).toEqual([todoDetails])
})

it('should remove a todo', () => {
    expect(reducer(state, actionDelete)).toEqual([])
})

it('should updated an exsisting todo', () => {
    const actionUpdate = {
        type: 'UPDATE_TODO',
        id: 'id-4', 
        title: 'Tommy', 
        date: 'tomorrow', 
        status: 'to do'
    } 

    const updatedTodos = [
        {id: 'id-4',  title: 'Tommy', date: 'today', status: 'to do'},
        {id: 'id-23', title: 'Mills', date: 'tomorrow',    status: 'to do'}
    ]

    expect(reducer(todos, actionUpdate)).toEqual(updatedTodos)
})

