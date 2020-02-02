import MOVIE_API_URL from "./config";
import {SearchMoviesSuccess, SearchMoviesFailure, SearchMoviesRequest} from "../actions";

export default class SwapiService {

    _apiBase = 'https://www.omdbapi.com/';
    _apiUrl = 'apikey=4a3b711b';

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}?s=${url}&${this._apiUrl}`);

        if ( !response.ok ) {
            throw new Error(`Could not fetch ${url}`);
        }

        return await response.json();
    };

    getBeginnerData = async (dispatch) => {
        try {
            const response = await fetch(MOVIE_API_URL);
            const jsonResponse = await response.json();
            dispatch(SearchMoviesSuccess(jsonResponse));
        } catch (e) {
            throw new Error(`Could not fetch ${e.message}`);
        }
    };

    searchFilms = async (searchValue, dispatch) => {
        dispatch(SearchMoviesRequest);
        try {
          const jsonResponse = await this.getResource(searchValue);

          if (jsonResponse.Response === 'True') {
            dispatch(SearchMoviesSuccess(jsonResponse));
          } else {
            dispatch(SearchMoviesFailure(jsonResponse));
          }
        } catch (e) {
          throw new Error(`couldn't not get response ${e.message}`);
        }
    }
}