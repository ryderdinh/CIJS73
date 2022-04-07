import './App.css';
import ActionComponent from './components/ActionComponent';
import Theme from './components/Theme';
import logo from './logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Theme />
        <ActionComponent />
      </header>
    </div>
  );
}

export default App;
