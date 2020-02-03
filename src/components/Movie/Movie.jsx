import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';


const Movie = ({
  movie: {
    Poster, Title, Year, Type,
  },
}) => {
  let myPoster = Poster;
  if (Poster === 'N/A') {
    myPoster = DEFAULT_PLACEHOLDER_IMAGE;
  }

  return (
    <div className="movie">
      <h2>{Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${Title}`}
          src={myPoster}
        />
      </div>
      <p>{Year}</p>
      <p>{Type}</p>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }),
};

export default Movie;
