import './App.css';
import FeedList from './components/FeedList';

function App() {
  const state = [
    {
      value: 'Hello react'
    },
    {
      value: 'WHAT IS YOUR NAME?'
    },
    {
      value: 'Hello react 2'
    },
    {
      value: 'Hello react 3'
    }
  ];

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>New Feed</h1>
        <FeedList feed={state} />
      </div>
    </div>
  );
}

export default App;
