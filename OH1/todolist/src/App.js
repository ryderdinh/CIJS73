import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './style.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  const countTaskLeft = () => {
    let countList = todoList.filter((item) => item.completed === false).length;
    return countList;
  };

  const handleInputClick = (newTask, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = newTask;

    setTodoList(newTodoList);
  };

  const addTodo = (text) => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        completed: false,
        title: text
      }
    ]);
  };

  const removeTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });

    setTodoList(newTodoList);
  };

  const editTask = (id, newData) => {
    const newTodoList = todoList.map((item) => {
      let newItem = item;

      if (newItem.id === id) {
        newItem = { ...newItem, title: newData };
      }

      return newItem;
    });

    setTodoList(newTodoList);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodoList(json);
      });
  }, []);

  return (
    <div className='App'>
      <FormInput onSubmit={addTodo} />
      <TodoList
        todoData={todoList}
        handleInputClick={handleInputClick}
        removeTask={removeTask}
        editTask={editTask}
      />
      <div className='task-list'>{countTaskLeft()}</div>
    </div>
  );
}

export default App;
