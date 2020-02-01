import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.kinopoisk.ru/images/film_big/326.jpg';

const Movie = ({ movie: {Poster, Title, Year} }) => {
    if ( Poster === "N/A" ) {
        Poster = DEFAULT_PLACEHOLDER_IMAGE;
    }

    return (
        <div>
            <h2>{Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`Title: ${Title}`}
                    src={Poster}
                />
            </div>
            <p>{Year}</p>
        </div>
    )
};

export default Movie;