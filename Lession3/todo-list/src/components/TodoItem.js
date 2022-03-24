import React from 'react';

function TodoItem(props) {
  return (
    <li className='todo-item'>
      {props.text}
      <div className='btn-delete'>Delete</div>
    </li>
  );
}

export default TodoItem;
