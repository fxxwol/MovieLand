import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits, BASE_IMG_URL } from 'service/movieAPI';
import { CastWrap, CastItem, CastText, CastDetails, Img } from 'styles/Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const data = await getCredits(movieId);
        if (!data.cast.length) {
          throw new Error("We don't have cast list for this movie");
        }
        setCast(data.cast);
      } catch (error) {
          setError(error)
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      {error && <p>{error.message}</p>}
      <CastWrap>
        {cast.map(person => (
          <CastItem key={person.id}>
            {person.profile_path ? (
              <Img
                src={BASE_IMG_URL + person.profile_path}
                alt={person.name}
              />
            ) : (
              <Img
                src={require('../img/unknown.png')}
                alt={person.name}
              />
            )}
            <CastDetails>
              <CastText CastText>{person.name}</CastText>
              <CastText>Character: {person.character}</CastText>
            </CastDetails>
          </CastItem>
        ))}
      </CastWrap>
    </>
  );
};

export default Cast;
