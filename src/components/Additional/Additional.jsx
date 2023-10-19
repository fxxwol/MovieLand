import { AdditionalWrap, BtnList, BtnWrap, Info } from 'components/Additional/Additional.styled';
import { Link, useLocation } from 'react-router-dom';

const Additional = props => {
  const location = useLocation();
  return (
    <AdditionalWrap>
      <h2>Additional info</h2>
      <BtnWrap>
        <BtnList>
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
        </BtnList>
        {(location.pathname.includes('cast') ||
          location.pathname.includes('reviews')) && (
            <Info
              component={Link}
              to={``}
              variant="outlined"
              color="secondary"
              className="hide"
            >
              Hide
            </Info>
          )}
      </BtnWrap>
    </AdditionalWrap>
  );
};

export default Additional;
