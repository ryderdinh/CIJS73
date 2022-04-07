import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [inputData, setInputData] = useState('');
  const [numberOfWord, setNumberOfWord] = useState(0);

  const onInputChange = (e) => {
    console.log(e.target);
    setInputData(e.target.value);
  };

  useEffect(() => {
    const count = setTimeout(() => {
      setNumberOfWord(
        inputData === true
          ? inputData.trim().replace(/\s\s+/g, ' ').split(' ').length
          : 0
      );
    }, 500);

    return () => {
      clearTimeout(count);
    };
  }, [inputData]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Số chữ: {numberOfWord} </p>
        <textarea type='text' onChange={onInputChange} value={inputData} />
      </header>
    </div>
  );
}

export default App;
