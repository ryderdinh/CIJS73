import { useState } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import SearchComponent from './SearchComponent';

function App() {
  const [movieDetail, setMovieDetail] = useState({});
  const getMovie = (movieData) => {
    setMovieDetail(movieData);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <SearchComponent getMovie={getMovie} />
        <ResultComponent movieDetail={movieDetail} />
      </header>
    </div>
  );
}

export default App;
