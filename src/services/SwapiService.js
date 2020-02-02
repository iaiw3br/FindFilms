export default class SwapiService {

    _apiBase = 'https://www.omdbapi.com/';
    _apiUrl = 'apikey=4a3b711b';

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}?s=${url}&${this._apiUrl}`);

        if ( !response.ok ) {
            throw new Error(`Could not fetch ${url}`);
        }

        return await response.json();
    }


}