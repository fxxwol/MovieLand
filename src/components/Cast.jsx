import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits, BASE_IMG_URL } from 'service/movieAPI';

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
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <img
              src={BASE_IMG_URL + person.profile_path}
              alt={person.name}
              width={300}
            />
            <p>{person.name}</p>
            <p>Character: {person.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
