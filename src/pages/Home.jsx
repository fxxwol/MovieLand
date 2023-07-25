import React from 'react';
import { useState, useEffect } from 'react';
import { getTrending } from '../service/movieAPI';
import { Link, useLocation } from 'react-router-dom';
import { ImageListItem, ImageListItemBar, Pagination, Stack } from '@mui/material';
import { H1, MovieItem } from 'styles/Home.styled';
import { Wrap } from 'styles/Movies.styled';
import { BASE_IMG_URL } from '../service/movieAPI';
import { Loader } from 'components/Loader';
import { Section } from 'styles/Common.styled';

const Home = props => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('')
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await getTrending(currPage);
        setMovies(data.results);
        setTotalPages(data.total_pages / 2);
        setStatus('resolved')
      } catch (e) {
        console.log(e);
        setStatus('rejected')
      }
    }
    getTrendingMovies();
    setStatus('pending')
  }, [currPage]);

  const handlePagination = (_, page) =>  {setCurrPage(page);
}
  if (status === 'pending') {
    return <Loader/>
  }
  if (status === 'resolved') {
    return (
      <Section>
        <H1 variant="h1">Trending today</H1>
        <Wrap>
          {movies.map(({ id, title, poster_path }) => (
            <MovieItem
              component={Link}
              to={`movies/${id}`}
              state={{ from: location }}
              key={id}
              sx={{ padding: '0' }}
            >
              <ImageListItem>
                <img
                  src={`${BASE_IMG_URL + poster_path}`}
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
            page={currPage}
            size="large"
            color="opacity"
            onChange={handlePagination}
          />
        </Stack>
      </Section>
    );
  }

  if (status === 'rejected') { 
    return <h1>Soryy, we don't have trending movies</h1>
  }
  
};

export default Home;
