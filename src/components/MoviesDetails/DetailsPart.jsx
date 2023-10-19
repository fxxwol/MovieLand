import { DetailItem, Details, DetailsModal, DetailsText, Genres, MovieImg, OverviewText, P } from "components/MoviesDetails/MovieDetails.styled";
import { BASE_IMG_URL } from "service/movieAPI";
import ImageSlider from "../ImageSlider/ImageSlider";

function DetailsPart({ movie }) {
  const releaseYear = new Date(movie.release_date).getFullYear();
  return (
    <Details>
      <div>
        <MovieImg src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
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
  );
}

export default DetailsPart;