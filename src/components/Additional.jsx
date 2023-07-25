import { Link, useLocation } from 'react-router-dom';
import { Info } from 'styles/Additional.styled';
import { Navigation } from 'styles/Layout.styled';

const Additional = props => {
  const location = useLocation();
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
            className={location.pathname.includes('cast') ? 'active' : ''}
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
            className={location.pathname.includes('reviews') ? 'active' : ''}
          >
            Reviews
          </Info>
        </li>
      </Navigation>
    </>
  );
};

export default Additional;
