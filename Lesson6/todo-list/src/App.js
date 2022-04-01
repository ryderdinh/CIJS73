import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import './style.css';

function App() {
  const [todoList, setTodoList] = useState([]);

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
        id: uuidv4(),
        done: false,
        text
      }
    ]);
  };

  return (
    <div className='App'>
      <FormInput onSubmit={addTodo} />
      <TodoList todoData={todoList} handleInputClick={handleInputClick} />
      <div className='task-list'>{countTaskLeft()}</div>
    </div>
  );
}

export default App;
