import Additional from 'components/Additional/Additional';
import { Info } from 'components/Additional/Additional.styled';
import { Loader } from 'components/Loader';
import DetailsPart from 'components/MoviesDetails/DetailsPart';
import {
  Div,
  MovieTtitle
} from 'components/MoviesDetails/MovieDetails.styled';
import Trailer from 'components/Trailer/Trailer';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movieAPI';
import { Section } from 'styles/Common.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        const {
          genres,
          release_date,
          runtime,
          vote_count,
          overview,
          poster_path,
          title,
          vote_average,
        } = await getMovieDetails(movieId);
        setMovie({
          genres,
          release_date,
          runtime,
          vote_count,
          overview,
          poster_path,
          title,
          vote_average,
        });
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
        <MovieTtitle>{movie.title}</MovieTtitle>
        <Div>
          <DetailsPart movie={movie} />
          <Additional />
        </Div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Trailer />
      </Section>
    );
  }
  if (status === 'rejected') {
    return <h1>Sorry, something went wrong :\</h1>;
  }
};

export default MovieDetails;
