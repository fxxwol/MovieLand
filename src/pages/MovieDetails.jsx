import { Loader } from 'components/Loader';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import Additional from 'components/Additional';
import { BASE_IMG_URL, getMovieDetails } from 'service/movieAPI';
import Trailer from 'components/Trailer';
import { Section } from 'styles/Common.styled';
import {
  DetailItem,
  DetailsModal,
  DetailsText,
  Div,
  OverviewText,
  P,
  Table,
  Tr,
} from 'styles/MovieDetails.styled';
import {
  Details,
  Genres,
  MovieImg,
  MovieTtitle,
} from 'styles/MovieDetails.styled';
import { Info } from 'styles/Additional.styled';
import ImageSlider from 'components/ImageSlider';

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

  const releaseYear = new Date(movie.release_date).getFullYear();

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
          <Details>
            <div>
              <MovieImg
                src={BASE_IMG_URL + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <DetailsModal>
              <DetailsText>
                <DetailItem>
                  <P className="title">Release Year: </P>
                  <P>{releaseYear}</P>
                </DetailItem>
                <DetailItem>
                  <P className="title">Duration: </P>
                  <P>{movie.runtime}</P>
                </DetailItem>
                <DetailItem>
                  <P className="title">Vote/Votes: </P>
                  <P>
                    {movie.vote_average}/{movie.vote_count}
                  </P>
                </DetailItem>
                <DetailItem>
                  <P className="title">Genres: </P>
                  
                    {movie.genres.length !== 0 && (
                      <Genres>
                        {movie.genres.map(({ id, name }) => {
                          return <p key={id}>{name}</p>;
                        })}
                      </Genres>
                    )}
                  
                </DetailItem>
              </DetailsText>
             <div>
                <P className="title">About</P>
                <OverviewText>{movie.overview}</OverviewText>
             </div>
              <ImageSlider />
            </DetailsModal>
          </Details>
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
    return <h1>Sorry, we don't have this movie</h1>;
  }
};

export default MovieDetails;
