import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className='todo-list'>
      <ul>
        {props.todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
