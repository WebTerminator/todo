import React from 'react';

const Input = ({ name, onChange, type, value }) => (
  <input 
    name={name}
    onChange={e => {onChange(e)} }
    type={type}
    value={value}
  />
);

export default Input