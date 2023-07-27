import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import { searchByName } from 'service/movieAPI';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import ScrollToTopFab from 'components/ScrollTopBtn';
import { Section } from 'styles/Common.styled';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;


  const handleSearch = searchQuery => {
    if (!searchQuery.trim()) {
      toast.error('Enter a query to search!');
      setSearchParams({});
      return;
    }
    setSearchParams({ query: searchQuery, page: 1 });
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setStatus('');
      return;
    }
    async function getByName() {
      try {
        const data = await searchByName(query, page);
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
  }, [query, page]);

  const handlePagination = (_, page) => {
    setSearchParams({ query, page });
  };

  const genereatePath = (id) => `${id}`

  return (
    <Section>
      <SearchBar onSubmit={handleSearch} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} page={page} totalPages={totalPages} onChange={handlePagination} path = {genereatePath} />}
      {status === 'rejected' && <h1>{error.message}</h1>}
      <ScrollToTopFab />
    </Section>
  );
};

export default Movies;
