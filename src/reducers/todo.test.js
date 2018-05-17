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

