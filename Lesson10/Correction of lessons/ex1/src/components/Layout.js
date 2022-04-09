import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    } else {
      navigate('/signin');
    }
  }, [auth, navigate]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
