import React, { useState } from 'react';

function TodoAdd(props) {
  const [value, setValue] = useState('');

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='todo-add'>
      <form>
        <input type='text' value={value} onChange={inputChange} />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addTodo(value);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoAdd;
