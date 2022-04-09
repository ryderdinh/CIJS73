import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState('');

  const signin = (user) => {
    setAuth(true);
    setUserName(user);
  };

  const logout = () => {
    setAuth(false);
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ auth, signin, userName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
