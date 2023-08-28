import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieDetail;
