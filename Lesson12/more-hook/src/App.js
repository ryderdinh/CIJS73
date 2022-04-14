import { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import ReactMemo from './components/ReactMemo';

function App() {
  const inputRef = useRef(null);
  const valueRef = useRef(0);
  /* 1. valueRef khoong làm component re-render
    2. valueRef giữ được giá trị cũ khi component update 
  */

  let value = 0;

  // khoong làm component re-render, không giữ được giá trị cũ khi component update

  const [val, setVal] = useState(0);
  /* 1. làm component re-render
    2. giữ được giá trị cũ khi component update 
  */

  const handleClick = () => {
    valueRef.current += 1;
    value = val;
    setVal(val + 1);
  };

  const memoData = useMemo(() => {
    return [{}, 1];
  }, []);

  const handleClick2 = useCallback(() => {}, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <input type='text' ref={inputRef} value='3' id='input' />
        <button onClick={handleClick}>Click</button>
        Val:{val}
        <ReactMemo memoData={memoData} handleClick2={handleClick2} />
      </header>
    </div>
  );
}

export default App;
