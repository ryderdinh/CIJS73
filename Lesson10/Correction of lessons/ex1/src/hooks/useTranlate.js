import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function useTranlate(nameComponent) {
  const { dictionary } = useContext(LanguageContext);

  const a = (key) => {
    return dictionary(nameComponent, key);
  };

  return { dictionary: a };
}

export default useTranlate;
