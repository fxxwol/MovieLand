import { Link } from 'react-router-dom';

const Additional = props => {
  return (
    <>
      <h3>Additional info</h3>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default Additional;
