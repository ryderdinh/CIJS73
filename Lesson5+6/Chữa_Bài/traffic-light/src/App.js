import { useState } from 'react';
import './App.css';
import Light from './components/Light';
import NextBtn from './components/NextBtn';

function App() {
  const [lights, setlights] = useState({
    light1: true,
    light2: false,
    light3: false
  });

  const handleClick = () => {
    if (lights.light1 === true) {
      setlights({
        light1: false,
        light2: true,
        light3: false
      });
    }

    if (lights.light2 === true) {
      setlights({
        light1: false,
        light2: false,
        light3: true
      });
    }

    if (lights.light3 === true) {
      setlights({
        light1: true,
        light2: false,
        light3: false
      });
    }
  };

  return (
    <div className='App'>
      <div className='light-box'>
        <Light on={lights.light1} className='red' />
        <Light on={lights.light2} className='yellow' />
        <Light on={lights.light3} className='green' />
      </div>
      <NextBtn onClick={handleClick} />
    </div>
  );
}

export default App;
