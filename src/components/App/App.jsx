import React, { useReducer, useEffect } from 'react';
import Header from '../Header';
import Movie from '../Movie';
import Search from '../Search';
import reducer from '../../reducers';

import './App.css';

import SwapiService from '../../services/SwapiService';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const swapiService = new SwapiService();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    swapiService.getBeginnerData(dispatch);
  }, []);

  const search = (searchValue) => {
    swapiService.searchFilms(searchValue, dispatch);
  };

  const { movies, errorMessage, loading } = state;
  let element;

  if (loading && !errorMessage) {
    element = <span>loading... </span>;
  } else if (errorMessage) {
    element = <div className="errorMessage">{errorMessage}</div>;
  } else {
    element = movies.map((movie, index) => (
      <Movie key={`${index}-${movie.Title}`} movie={movie} />
    ));
  }


  return (
    <div className="App">
      <Header text="Find Films" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {' '}
        {element}
        {' '}
      </div>
    </div>
  );
};

export default App;
