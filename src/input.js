import React from 'react';

const Input = ({ name, onChange, type }) => (
  <input 
    name={name}
    onChange={onChange}
    type={type} />
);

export default Input