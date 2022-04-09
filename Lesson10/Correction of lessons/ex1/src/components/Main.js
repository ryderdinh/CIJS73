import { useContext } from 'react';
import '../assets/css/Main.css';
import { LanguageContext } from '../context/LanguageContext';

function Main() {
  const { dictionary } = useContext(LanguageContext);

  return <main>{dictionary('MainComponent', 'welcome')}</main>;
}

export default Main;
