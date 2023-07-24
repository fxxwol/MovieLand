import { Link } from 'react-router-dom';
import { Info } from 'styles/Additional.styled';
import { Navigation } from 'styles/Layout.styled';

const Additional = props => {
  return (
    <>
      <h2>Additional info</h2>
      <Navigation>
        <li>
          <Info
            component={Link}
            to={`cast`}
            variant="outlined"
            color="secondary"
          >
            Cast
          </Info>
        </li>
        <li>
          <Info
            component={Link}
            to={`reviews`}
            variant="outlined"
            color="secondary"
          >
            Reviews
          </Info>
        </li>
      </Navigation>
    </>
  );
};

export default Additional;
