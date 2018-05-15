import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Input from './../input';

import { getValue } from './../util/'

import { todos } from './../data'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App todos={todos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should simulate the onChange for each form input', () => {
  const wrapper = shallow(<Input onChange={getValue} />)
  wrapper.find('input').simulate('change', {
    target: {
      getAttribute: name => name,
      value: 'some-value'
    }
  })
  expect(wrapper).toMatchSnapshot();
})

