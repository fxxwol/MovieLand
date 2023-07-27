import React from 'react'
import { Wrap } from 'styles/Movies.styled';
import { Stack, Pagination } from '@mui/material';
import MovieCard from './MovieCard';
import {useMediaQuery} from '@mui/material';
import { theme } from 'styles/Theme';

function MoviesList({ movies, page, totalPages, onChange, path }) {
      const size = useMediaQuery(theme.breakpoints.down('lg'))
        ? 'small'
        : 'large';
  return (
    <>
      <Wrap>
        {movies.map(({ id, title, poster_path }) => (
            <MovieCard id={id} title={title} poster_path={poster_path} key={id} path = {path} />
        ))}
      </Wrap>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPages}
          shape="rounded"
          showFirstButton
          showLastButton
          page={+page}
          size={size}
          color="opacity"
          onChange={onChange}
        />
      </Stack>
    </>
  );
}

export default MoviesList