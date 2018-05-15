import React from 'react';
import ReactDOM from 'react-dom';
import { getValue, isName } from './../util/'

it('should check that getValue returns an object with attributes name and value', () => {
    const attrs = {name: 'name', value: 'Alex'}
    const event ={target: { getAttribute: name => attrs[name], value: 'Alex' }};
    expect(getValue(event)).toEqual(attrs)
})
  
it('should check which name attribute has been taken into account', () => {
    const name = 'date'
    const input = {
        type: 'date'
    }
    expect(isName(input.type, name)).toEqual(true)
})