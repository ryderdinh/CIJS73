import { useContext, useState } from 'react';
import '../assets/css/Signin.css';
import { AuthContext } from '../context/AuthContext';
import { useTranlate } from '../hooks';

function Signin() {
  const { signin } = useContext(AuthContext);
  const { dictionary } = useTranlate('SigninComponent');

  const [username, setUsername] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    signin(username);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='container'>
        <label for='uname'>
          <b>{dictionary('username')}</b>
        </label>
        <input
          type='text'
          placeholder={dictionary('input-placeholder-user')}
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <button type='submit'>{'Sign In'}</button>
      </div>
    </form>
  );
}

export default Signin;
