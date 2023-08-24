import React from 'react';
import { Wrap } from 'styles/Movies.styled';
import MovieCard from './MovieCard';

function MoviesList({ movies, filtered = [], path, wasFiltered, isFiltering }) {
  return (
    <>
      <Wrap>
        {(() => {
          if (wasFiltered && !isFiltering) {
            if (filtered.length) {
              return filtered.map(({ id, title, poster_path }) => (
                <MovieCard
                  id={id}
                  title={title}
                  poster_path={poster_path}
                  key={id}
                  path={path}
                />
              ));
            } else {
              return <h1>There is no movie with this genre</h1>;
            }
          } else {
            return movies.map(({ id, title, poster_path }) => (
              <MovieCard
                id={id}
                title={title}
                poster_path={poster_path}
                key={id}
                path={path}
              />
            ));
          }
        })()}
      </Wrap>
    </>
  );
}

export default MoviesList;
