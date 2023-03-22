import React from 'react';
import Form from 'react-bootstrap/Form';

export const HeaderSelect = ({ options, className }) => {
  return (
    <div className='header__selectWrapper'>
      <Form.Select className={className}>
      {options.map(option => (
        <option key={option}>
          {option}
        </option>
      ))}
    </Form.Select>
    </div>
  );
};

