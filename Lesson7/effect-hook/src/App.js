import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const inc = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = count;

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []); // componentDidMount

  useEffect(() => {
    document.title = count;
  }, [count]); // componentDidUpdate

  // useEffect(() => {
  //   // hàm được trả về khi được goi component unmount
  //   return () => {
  //     // code xử lý logic
  //   };
  // }, []); // componentWillUnmount

  return (
    <div className='App'>
      <header className='App-header'>
        {count}
        <button onClick={inc}>+</button>

        {todos.length !== 0 && (
          <div>
            <div className='title'>Title: {todos[0].title}</div>
            <div className='complete'>
              completed: {todos[0].completed.toString()}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
