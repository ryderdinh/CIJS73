import React, { useState } from 'react';

function TodoList(props) {
  return (
    <div className='todo-list'>
      <ul>
        {props.todoData.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              dataItem={item}
              index={index}
              handleInputClick={props.handleInputClick}
              removeTask={props.removeTask}
              editTask={props.editTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

function TodoItem(props) {
  const { dataItem, index } = props;
  const [edit, setEdit] = useState(false);
  const [newData, setNewData] = useState(dataItem.title);

  const handleTextariaChange = (e) => {
    setNewData(e.target.value);
  };

  return (
    <li className='todo-item'>
      <div
        className='item-data'
        onClick={() => {
          !edit &&
            props.handleInputClick(
              {
                title: dataItem['title'],
                completed: !dataItem.done
              },
              index
            );
        }}
      >
        {/* <input type='radio' checked={dataItem.done} /> */}

        {edit === true ? (
          <span>
            <textarea
              type='text'
              value={newData}
              onChange={handleTextariaChange}
            />
          </span>
        ) : (
          <span>
            {`${index + 1}. `}
            {dataItem['title']}
          </span>
        )}
      </div>

      <div className='item-action'>
        {edit === true ? (
          <button
            onClick={() => {
              setEdit(false);
              props.editTask(dataItem.id, newData);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          onClick={() => {
            props.removeTask(dataItem.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
