import React from 'react';
import { Wrap } from 'styles/Movies.styled';
import MovieCard from './MovieCard';

function MoviesList({ movies, path, filtered }) {
     
  return (
    <>
      <Wrap>
        {filtered.length
          ? filtered.map(({ id, title, poster_path }) => (
              <MovieCard
                id={id}
                title={title}
                poster_path={poster_path}
                key={id}
                path={path}
              />
            ))
          : movies.map(({ id, title, poster_path }) => (
              <MovieCard
                id={id}
                title={title}
                poster_path={poster_path}
                key={id}
                path={path}
              />
            ))}
      </Wrap>
    </>
  );
}

export default MoviesList