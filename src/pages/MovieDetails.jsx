import { Loader } from 'components/Loader';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Additional from 'components/Additional';
import { BASE_IMG_URL, getMovieDetails } from 'service/movieAPI';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import { Details, Genres } from 'styles/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        const { genres, overview, poster_path, title, vote_average } =
          await getMovieDetails(movieId);
        setMovie({ genres, overview, poster_path, title, vote_average });
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    getDetails();
    setStatus('pending');
  }, [movieId]);
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return (
      <>
        <Button
          component={Link}
          to={backLink.current}
          color="secondary"
          size="small"
          variant="outlined"
        >
          Go Back
        </Button>
        <Details>
          <img
            src={BASE_IMG_URL + movie.poster_path}
            alt={movie.title}
            width={300}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {Math.ceil(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>

            {movie.genres.length !== 0 && (
              <>
                <h2>Genres</h2>
                <Genres>
                  {movie.genres.map(({ id, name }) => {
                    return <p key={id}>{name}</p>;
                  })}
                </Genres>
              </>
            )}
          </div>
        </Details>
        <Additional />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
  if (status === 'rejected') {
    return <h1>Sorry, we don't have this movie</h1>;
  }
};

export default MovieDetails;
