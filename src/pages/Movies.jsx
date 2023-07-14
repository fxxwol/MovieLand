import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import { searchByName } from 'service/movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
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
       setStatus('')
       return;
     }
    async function getByName() {
      try {
       
        const data = await searchByName(query);
        if (!data.total_results) {
          throw new Error(
            'Sorry, there are no movies matching your search query. Please try again'
          );
        }
        setMovies(data.results);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    }
    getByName();
    setStatus('pending');
    setError(null)
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status=== 'rejected' && <h1>{error.message}</h1>}
    </>
  );
};

export default Movies;
