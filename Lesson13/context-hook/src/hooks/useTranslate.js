import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const useTranslate = (componentName) => {
  const { dictionary: a } = useContext(LanguageContext);

  const dictionary = (key) => {
    return a(componentName, key);
  };

  return { dictionary };
};

export default useTranslate;
