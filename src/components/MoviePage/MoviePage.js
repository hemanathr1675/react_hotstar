import React, { useState } from 'react';
import MovieDetail from '../Movie/Movie';
import './MoviePage.css'; // MoviePagely your own styling

const MoviePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description for Movie 1',
      releaseDate: 'August 15, 2023',
      poster: 'movie1.jpg'
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description for Movie 2',
      releaseDate: 'September 10, 2023',
      poster: 'movie2.jpg'
    },
    // Add more movies...
  ];

  const handleMovieSelect = movieId => {
    const selected = movies.find(movie => movie.id === movieId);
    setSelectedMovie(selected);
  };

  return (
    <div className="MoviePage">
      <div className="movie-list">
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <button onClick={() => handleMovieSelect(movie.id)}>
                {movie.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
};

export default MoviePage;
