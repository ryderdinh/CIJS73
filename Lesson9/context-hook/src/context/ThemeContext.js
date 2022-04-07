import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const children = props.children;

  const [theme, setTheme] = useState('dark');
  const [content, setContent] = useState('Hello Reactjs');
  const [color, setColor] = useState('red');

  const changeTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const changeColor = () => {
    if (color === 'red') {
      setColor('blue');
    } else {
      setColor('red');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        content: content,
        changeTheme,
        setContent,
        color,
        changeColor
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
