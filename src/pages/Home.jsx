import React from 'react';
import { useState, useEffect } from 'react';
import { getTrending } from '../service/movieAPI';
import { Link, useLocation } from 'react-router-dom';
import {
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Stack,
} from '@mui/material';
import { H1, ImageItem, MovieItem } from 'styles/Home.styled';
import { Wrap } from 'styles/Movies.styled';
import { BASE_IMG_URL } from '../service/movieAPI';
import { Loader } from 'components/Loader';
import { Section } from 'styles/Common.styled';
import { useSearchParams } from 'react-router-dom';

const Home = props => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await getTrending(page);
        setMovies(data.results);
        setTotalPages(data.total_pages / 2);
        setStatus('resolved');
      } catch (e) {
        console.log(e);
        setStatus('rejected');
      }
    }
    getTrendingMovies();
    setStatus('pending');
  }, [page]);

  const handlePagination = (_, page) => {
    setSearchParams({page})
  };
  return (
    <Section>
      <H1 variant="h1">Trending today</H1>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <Wrap>
            {movies.map(({ id, title, poster_path }) => (
              <MovieItem
                component={Link}
                to={`movies/${id}`}
                state={{ from: location }}
                key={id}
                sx={{ padding: '0' }}
              >
                <ImageListItem sx={{ width: '100%' }}>
                  <ImageItem
                    src={`${
                      poster_path
                        ? BASE_IMG_URL + poster_path
                        : require('../img/default-poster.jpg')
                    }`}
                    alt={title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={title}
                    sx={{
                      textAlign: 'center',
                      background: 'rgba(0, 0, 0, 0.7)',
                    }}
                  />
                </ImageListItem>
              </MovieItem>
            ))}
          </Wrap>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={totalPages}
              shape="rounded"
              showFirstButton
              showLastButton
              page={+page}
              size="large"
              color="opacity"
              onChange={handlePagination}
            />
          </Stack>
        </>
      )}
      {status === 'rejected' && <h1>Sorry, we don't have trending movies</h1>}
    </Section>
  );
};

export default Home;
