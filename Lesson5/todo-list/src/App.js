import { useState } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './style.css';

function App() {
  const [todoList, setTodoList] = useState([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit1',
      done: true
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2',
      done: false
    }
  ]);

  const countTaskLeft = () => {
    let countList = todoList.filter((item) => item.done === false).length;
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
        done: false,
        text
      }
    ]);
  };

  return (
    <div className='App'>
      <FormInput onSubmit={addTodo} />
      <TodoList
        todoData={todoList}
        handleInputClick={handleInputClick}
      />
      <div className='task-list'>{countTaskLeft()}</div>
    </div>
  );
}

export default App;
