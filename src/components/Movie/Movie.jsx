import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';


const Movie = ({ movie: { Poster, Title, Year, Type } }) => {
  if (Poster === 'N/A') {
    Poster = DEFAULT_PLACEHOLDER_IMAGE;
  }

  return (
    <div className="movie">
      <h2>{Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${Title}`}
          src={Poster}
        />
      </div>
      <p>{Year}</p>
      <p>{Type}</p>
    </div>
  );
};


export default Movie;
