import { useContext, useState } from 'react';
import '../assets/css/Footer.css';
import { LanguageContext } from '../context/LanguageContext';

function Footer() {
  const [optionValue, setOptionValue] = useState('en');
  const { setUserLanguage } = useContext(LanguageContext);

  return (
    <footer>
      <select
        value={optionValue}
        onChange={(e) => {
          setOptionValue(e.target.value);
          setUserLanguage(e.target.value);
        }}
      >
        <option value='en'>en</option>
        <option value='vi'>vi</option>
      </select>
    </footer>
  );
}

export default Footer;
