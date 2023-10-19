import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrending } from '../service/movieAPI';
import ScrollToTopFab from 'components/ScrollTopBtn';
import MoviesList from 'components/MoviesList';
import HomeHero from 'components/HomeHero/HomeHero';
import { Stack, Pagination, useMediaQuery } from '@mui/material';
import { H1 } from 'styles/Home.styled';
import { Section } from 'styles/Common.styled';
import { MoviesWrap } from 'styles/Movies.styled';
import { theme } from 'styles/Theme';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const page = searchParams.get('page') ?? 1;
  const size = useMediaQuery(theme.breakpoints.down('lg')) ? 'small' : 'large';

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
    setSearchParams({ page });
  };

  const genereatePath = id => `movies/${id}`;

  return (
    <>
      <HomeHero />
      <Section>
        <H1 variant="h1">Trending today</H1>
        <MoviesWrap>
          {status === 'resolved' && (
            <MoviesList movies={movies} path={genereatePath} />
          )}
        </MoviesWrap>
        {movies.length ? (
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={totalPages}
              shape="rounded"
              showFirstButton
              showLastButton
              page={+page}
              size={size}
              color="opacity"
              onChange={handlePagination}
            />
          </Stack>
        ) : (
          <></>
        )}
        {status === 'rejected' && <h1>Sorry,something went wrong :\</h1>}
        <ScrollToTopFab />
      </Section>
    </>
  );
};

export default Home;
