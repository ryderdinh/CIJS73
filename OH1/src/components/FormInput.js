import React, { useState } from 'react';

function FormInput(props) {
  console.log(props);
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      className='form-input'
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(inputValue);
        setInputValue('');
      }}
    >
      <input
        type='text'
        placeholder='Enter your task here...'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
}

export default FormInput;
