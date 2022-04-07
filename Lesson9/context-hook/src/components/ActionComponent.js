import React, { useContext, useState } from 'react';
import '../assets/css/Button.css';
import { ThemeContext } from '../context/ThemeContext';

function ActionComponent() {
  const [input, setInput] = useState('');
  const { changeTheme, setContent, color, changeColor } =
    useContext(ThemeContext);

  console.log(changeColor);
  return (
    <div>
      <label className='switch'>
        <input type='checkbox' onClick={changeTheme} />
        <span className='slider'></span>
      </label>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setContent(input);
        }}
      >
        <input
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>

      <button style={{ backgroundColor: color }} onClick={changeColor}>
        {color}
      </button>
      <button style={{ backgroundColor: color }}>{color}</button>
      <button style={{ backgroundColor: color }}>{color}</button>
    </div>
  );
}

export default ActionComponent;
