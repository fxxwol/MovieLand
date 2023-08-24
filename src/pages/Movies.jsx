import React, { useEffect, useState, useRef } from 'react';
import { Pagination, Stack, useMediaQuery } from '@mui/material';
import Filter from 'components/Filter';
import { Loader } from 'components/Loader';
import MoviesList from 'components/MoviesList';
import ScrollToTopFab from 'components/ScrollTopBtn';
import SearchBar from 'components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchByName } from 'service/movieAPI';
import { Section } from 'styles/Common.styled';
import { theme } from 'styles/Theme';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
    const [isTyping, setIsTyping] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [wasFiltered, setWasFiltered] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const page = searchParams.get('page') ?? 1;
  const genreId = searchParams.get('genreId') ?? '';
  const size = useMediaQuery(theme.breakpoints.down('lg')) ? 'small' : 'large';

  const handleSearch = newSearchQuery => {
    if (!newSearchQuery.trim()) {
      toast.error('Enter a query to search!');
      setSearchQuery('');
      setSearchParams({});
      setWasFiltered(false);
      setFilteredMovies([]);
    } else {
      setSearchQuery(newSearchQuery);
      setWasFiltered(false);
      setSearchParams({ query: newSearchQuery, page: 1 });
    }
  };

  const handleFilterChange = genre => {
    if (!genre) {
      setWasFiltered(false);
      return;
    }
    setIsFiltering(true);
    if (movies.length) {
      setWasFiltered(true);
      setSearchParams({ query: searchQuery, page: 1, genreId: genre });
      setFilteredMovies(
        movies.filter(({ genre_ids }) => genre_ids.includes(+genre))
      );
      setTotalPages(Math.ceil(filteredMovies.length / 20));
    }
  };

  useEffect(() => {
    async function getByName() {
      try {
        const data = await searchByName(searchQuery, page);
        if (!data.total_results) {
          throw new Error(
            'Sorry, there are no movies matching your search query. Please try again'
          );
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    }

    if (searchQuery) {
      getByName();
      setStatus('pending');
      setError(null);
    }
  }, [searchQuery, page]);

  useEffect(() => {
    if (genreId) {
      setFilteredMovies(
        movies.filter(({ genre_ids }) => genre_ids.includes(+genreId))
      );
    }
  }, [genreId, movies]);

  useEffect(() => {
    setIsFiltering(false);
    if (filteredMovies.length) {
      setTotalPages(Math.ceil(filteredMovies.length / 20));
    }
  }, [filteredMovies]);

  const handlePagination = (_, page) => {
    setSearchParams({ query: searchQuery, page });
  };

  const genereatePath = id => `${id}`;

  return (
    <Section>
      <SearchBar onSubmit={handleSearch} onChange={setMovies} handleFilter={handleFilterChange} isTyping={setIsTyping} />
      {status && status === 'resolved' && !isTyping && (
        <Filter onChange={handleFilterChange} />
      )}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <MoviesList
            movies={movies}
            filtered={filteredMovies}
            path={genereatePath}
            wasFiltered={wasFiltered}
            isFiltering={isFiltering}
          />
          {(!wasFiltered && movies.length) || filteredMovies.length ? (
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
        </>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
      <ScrollToTopFab />
    </Section>
  );
};

export default Movies;
