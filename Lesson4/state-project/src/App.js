import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount('aaaaaaa');
  };

  return (
    <div className='App'>
      <Count count={count} increment={increment} />
      <div className='btn-box'>
        <div className='btn' onClick={decrement}>
          -
        </div>
        <div className='btn' onClick={increment}>
          +
        </div>
      </div>
    </div>
  );
}

export default App;

function Count(props) {
  console.log(props);

  return <div className='value'>COUNT = {props.count}</div>;
}

function Increment () {

}