import React from 'react';
import { useState, useEffect } from 'react';
import { getTrending } from '../service/movieAPI';
import ScrollToTopFab from 'components/ScrollTopBtn';
import MoviesList from 'components/MoviesList';
import { H1 } from 'styles/Home.styled';
import { Section } from 'styles/Common.styled';
import { useSearchParams } from 'react-router-dom';
import HomeHero from 'components/HomeHero';

const Home = props => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('');
  const [totalPages, setTotalPages] = useState(1);
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
    setSearchParams({ page });
  };

  const genereatePath = id => `movies/${id}`;

  return (
    <>
      <HomeHero></HomeHero>
      <Section>
        <H1 variant="h1">Trending today</H1>
        {/* {status === 'pending' && <Loader />} */}
        {status === 'resolved' && (
          <MoviesList movies={movies} page={page} totalPages={totalPages} onChange={handlePagination} path={ genereatePath} />
        )}
        {status === 'rejected' && <h1>Sorry, we don't have trending movies</h1>}
        <ScrollToTopFab />
      </Section>
      
    </>
  );
};

export default Home;
