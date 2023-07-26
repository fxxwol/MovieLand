import { Loader } from 'components/Loader';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import Additional from 'components/Additional';
import { BASE_IMG_URL, getMovieDetails } from 'service/movieAPI';
import Trailer from 'components/Trailer';
import { Section } from 'styles/Common.styled';
import { Details, Genres, MovieImg, MovieTtitle } from 'styles/MovieDetails.styled';
import { Info } from 'styles/Additional.styled';

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
      <Section>
        <Info
          component={Link}
          to={backLink.current}
          color="secondary"
          size="small"
          variant="outlined"
        >
          Go Back
        </Info>
        <Details>
          <div>
            <MovieTtitle>{movie.title}</MovieTtitle>
            <MovieImg
              src={BASE_IMG_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div>
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
        <Trailer />
      </Section>
    );
  }
  if (status === 'rejected') {
    return <h1>Sorry, we don't have this movie</h1>;
  }
};

export default MovieDetails;
