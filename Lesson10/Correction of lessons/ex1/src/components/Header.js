import { useContext } from 'react';
import '../assets/css/Header.css';
import { AuthContext } from '../context/AuthContext';
import { useTranlate } from '../hooks/index';

function Header() {
  const { auth, userName } = useContext(AuthContext);
  // const { dictionary } = useContext(LanguageContext);

  const { dictionary } = useTranlate('HeaderComponent');

  return (
    <header>
      <h2 className='logo'>MindX</h2>

      <div className='action'>
        {auth ? (
          <div className='action-item'>
            {/* Welcome,.... */}
            {dictionary('welcome')}, {userName}
          </div>
        ) : (
          <div className='action-item'>{'a'}</div> //Login
        )}
      </div>
    </header>
  );
}

export default Header;
