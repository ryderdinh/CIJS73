import { useContext } from 'react';
import '../assets/css/Header.css';
import { AuthContext } from '../context/AuthContext';
import { LanguageContext } from '../context/LanguageContext';

function Header() {
  const { auth, userName } = useContext(AuthContext);
  const { dictionary } = useContext(LanguageContext);

  return (
    <header>
      <h2 className='logo'>MindX</h2>

      <div className='action'>
        {auth ? (
          <div className='action-item'>
            {/* Welcome,.... */}
            {dictionary('HeaderComponent', 'welcome')}, {userName}
          </div>
        ) : (
          <div className='action-item'>{dictionary('Global', 'login-btn')}</div> //Login
        )}
      </div>
    </header>
  );
}

export default Header;
