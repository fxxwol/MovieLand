import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import { searchByName } from 'service/movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import { Wrap } from 'styles/Movies.styled';
import { BASE_IMG_URL } from 'service/movieAPI';
import { ImageItem, MovieItem } from 'styles/Home.styled';
import {
  ImageListItemBar,
  ImageListItem,
  Stack,
  Pagination,
} from '@mui/material';
import { Section } from 'styles/Common.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSearch = searchQuery => {
    if (!searchQuery.trim()) {
      toast.error('Enter a query to search!');
      setSearchParams({});
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setStatus('');
      return;
    }
    async function getByName() {
      try {
        const data = await searchByName(query, currPage);
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
    getByName();
    setStatus('pending');
    setError(null);
  }, [query, currPage]);

  const handlePagination = (_, page) => {
    setCurrPage(page);
  };

  return (
    <Section>
      <SearchBar onSubmit={handleSearch} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <Wrap>
            {movies.map(({ id, title, poster_path }) => (
              <MovieItem
                component={Link}
                to={`${id}`}
                state={{ from: location }}
                key={id}
                sx={{ padding: '0' }}
              >
                <ImageListItem
                  sx={{
                    width: '100%',
                    position: 'unset',
                  }}
                >
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
              page={currPage}
              size="large"
              color="opacity"
              onChange={handlePagination}
            />
          </Stack>
        </>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
    </Section>
  );
};

export default Movies;
