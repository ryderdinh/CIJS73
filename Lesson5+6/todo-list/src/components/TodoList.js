import React from 'react';

function TodoList(props) {
  return (
    <div className='todo-list'>
      <ul>
        {props.todoData.map((item, index) => {
          return (
            <li
              className='todo-item'
              onClick={() => {
                props.handleInputClick(
                  {
                    text: item['text'],
                    done: !item.done
                  },
                  index
                );
              }}
            >
              <input type='radio' checked={item.done} />
              <span>{item['text']}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
