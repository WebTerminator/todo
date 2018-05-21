import React from 'react';

const Input = ({ name, onChange, type, value, placeholder }) => (
  <input 
    name={name}
    onChange={e => {onChange(e)} }
    type={type}
    value={value}
    placeholder={placeholder}
  />
);

export default Input