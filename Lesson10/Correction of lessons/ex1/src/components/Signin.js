import { useContext, useState } from 'react';
import '../assets/css/Signin.css';
import { AuthContext } from '../context/AuthContext';
import { LanguageContext } from '../context/LanguageContext';

function Signin() {
  const { signin } = useContext(AuthContext);
  const { dictionary } = useContext(LanguageContext);
  const [username, setUsername] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    signin(username);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='container'>
        <label for='uname'>
          <b>{dictionary('SigninComponent', 'username')}</b>
        </label>
        <input
          type='text'
          placeholder={dictionary('SigninComponent', 'input-placeholder-user')}
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <button type='submit'>{dictionary('Global', 'login-btn')}</button>
      </div>
    </form>
  );
}

export default Signin;
