import { createContext, useState } from 'react';
import enTranslation from '../lang/en.json';
import viTranslation from '../lang/vi.json';

export const LanguageContext = createContext();

const defaultUserLanguage = 'vi';

export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState(defaultUserLanguage);

  const dictionary = (componentName, elementName) => {
    const translation = {
      enTranslation,
      viTranslation
    };
    
    return translation[`${userLanguage}Translation`][componentName][
      elementName
    ];
  };

  // const langList = () => {
  //   return [enTranslation, viTranslation];
  // };

  return (
    <LanguageContext.Provider value={{ dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};
