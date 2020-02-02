import React, { useReducer, useEffect } from 'react';
import Header from '../Header';
import Movie from '../Movie';
import Search from '../Search';
import reducer from '../../reducers';

import './App.css';

import { SearchMoviesSuccess, SearchMoviesRequest, SearchMoviesFailure } from '../../actions';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(SearchMoviesSuccess(jsonResponse));
      });
  }, []);

  const search = async (searchValue) => {
    dispatch(SearchMoviesRequest);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`);
      const jsonResponse = await response.json();

      if (jsonResponse.Response === 'True') {
        dispatch(SearchMoviesSuccess(jsonResponse));
      } else {
        dispatch(SearchMoviesFailure(jsonResponse));
      }
    } catch (e) {
      throw new Error(`couldn't not get response ${e.message}`);
    }
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="Find Films" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        { loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
