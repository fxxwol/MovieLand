import { useEffect, useState } from 'react';
import { getGenres } from 'service/movieAPI';

function Filter({ onChange}) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getAllGenres = async () => {
      const data = await getGenres();
      setGenres(data.genres);
    };
    getAllGenres();
  }, []);
    
  return (
    <>
      <select onChange={e => onChange(e.target.value)}>
        <option value="">Genre</option>
        {genres.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Filter;
