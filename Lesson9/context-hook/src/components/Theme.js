import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Theme() {
  const { theme, content } = useContext(ThemeContext);
  return (
    <div>
      Theme:{theme}, Content: {content}
    </div>
  );
}

export default Theme;
