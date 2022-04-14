import axios from 'axios';
import React, { useState } from 'react';

function SearchComponent({ getMovie }) {
  const [result, setResult] = useState([]);
  const [inputData, setInputData] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    setInputData(e.target.value);

    if (e.target.value === '') setShowResult(false);
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      // https://api.themoviedb.org/3/search/movie?api_key=9e96e8999576e6cd198ac3709cdedfc4&query=Jack+Reacher
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '9e96e8999576e6cd198ac3709cdedfc4',
            query: inputData.trim()
          }
        }
      );

      console.log(response.data);
      setResult(response.data.results);
      setShowResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (id) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '9e96e8999576e6cd198ac3709cdedfc4'
        }
      });
      console.log(res.data);

      getMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='search-box'>
      <form className='example' onSubmit={searchMovies}>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          value={inputData}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>

      <div className={`result ${showResult && 'open'}`}>
        <ul>
          {result.length === 0 && (
            <li>
              <small>No result found</small>
            </li>
          )}

          {result.length > 0 &&
            result.map((movie) => (
              <li
                key={movie.id}
                onClick={() => {
                  searchMovie(movie.id);
                }}
              >
                <p>{movie.title} </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchComponent;
