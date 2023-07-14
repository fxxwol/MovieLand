import { Loader } from 'components/Loader';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movieAPI';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
    const [status, setStatus] = useState('');
    const location = useLocation()
    const backLink = useRef(location.state?.from ?? '/movies')
    console.log(location)
    console.log(backLink)

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
        <Link to={backLink.current} >Go back</Link>
        <div>
          <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} width={450} />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {Math.ceil(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            {movie.genres.map(({ id, name }) => {
              return <p key={id}>{name}</p>;
            })}
          </div>
        </div>
      </>
    );
  }
  if (status === 'rejected') {
    return <h1>Sorry, we don't have this movie</h1>;
  }
};

export default MovieDetails;
