import React from 'react';
import { Wrap } from 'styles/Movies.styled';
import MovieCard from './MovieCard';

function MoviesList({ movies }) {
  return (
    <>
      <Wrap> {
        movies.map(({ id, title, poster_path }) => (
          <MovieCard
            id={id}
            title={title}
            poster_path={poster_path}
            key={id}
            // path={}
          />
        ))
      }
      </Wrap>
    </>
  );
}

export default MoviesList;
