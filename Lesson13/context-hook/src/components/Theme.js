import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslate } from '../hooks';

function Theme() {
  const { theme, content } = useContext(ThemeContext);
  const displayName = 'ThemeComponent';
  const { dictionary } = useTranslate(displayName);

  return (
    <div onClick={dictionary}>
      {dictionary('theme')}:{theme}, {dictionary('content')}:{content}
    </div>
  );
}

export default Theme;
