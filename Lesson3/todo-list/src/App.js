import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React'
    },
    {
      text: 'Learn React 1'
    },
    {
      text: 'Learn React 2'
    }
  ]);

  // console.log(todos);

  const addTodo = (value) => {
    setTodos([...todos, { text: value }]);
  };

  return (
    <div className='App'>
      <Header />
      <TodoAdd addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
