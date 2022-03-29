import React from 'react';

function TodoItem({ index, value }) {
  return (
    <li>
      {index}. {value}
    </li>
  );
}

export default TodoItem;
