import { useEffect, useState } from 'react';
import { getGenres } from 'service/movieAPI';

function Filter({ onChange }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const getAllGenres = async () => {
      const data = await getGenres();
      setGenres(data.genres);
    };
    getAllGenres();
  }, []);

  const handleGenreChange = value => {
    setSelectedGenre(value);
    onChange(value);
  };

  return (
    <>
      <select
        onChange={e => handleGenreChange(e.target.value)}
        value={selectedGenre || ''}
      >
        {selectedGenre === null && (
          <option value="" disabled hidden>
            Genre
          </option>
        )}
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
